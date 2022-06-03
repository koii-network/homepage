import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    hbspt: {
      forms: {
        create(options: {
          portalId: string;
          formId: string;
          target: string;
          region: string;
          errorMessageClass?: string;
          cssClass?: string;
          errorClass?: string;
          submitButtonClass?: string;
          cssRequired?: string;
        }): {
          id: string;
          getMetaData(): unknown;
          hasField(): boolean;
          onReady(callback: () => void): void;
          setFieldValue(val: string): unknown;
          setSubmitText(val: string): unknown;
        };
      };
    };
  }
}

interface HubspotFormProps {
  readonly formId: string;
  readonly wrapperClassNames?: string;
  readonly inputWrapperClassNames?: string;
  readonly inputClassNames?: string;
  readonly submitClassNames?: string;
  readonly className?: string;
  readonly onSubmit?: () => void;
}

const scriptElementId = "hubspot-script";

function appendScript(): HTMLScriptElement {
  const script = document.createElement("script");
  script.id = scriptElementId;
  script.src = "https://js.hsforms.net/forms/v2.js";
  document.body.appendChild(script);
  return script;
}

function getScript(): HTMLScriptElement | null {
  return document.getElementById(scriptElementId) as HTMLScriptElement | null;
}

function waitForCondition(
  condition: () => boolean,
  recheckInterval = 100
): Promise<void> {
  return new Promise((resolve) => {
    if (condition()) {
      resolve();
    } else {
      const interval = setInterval(() => {
        if (condition()) {
          clearInterval(interval);
          resolve();
        }
      }, recheckInterval);
    }
  });
}

function generateRandomString(): string {
  return Math.random().toString().substring(2, 5);
}

function generateContainerId(): string {
  while (true) {
    const id = `hubspotForm-${generateRandomString()}`;
    if (!document.getElementById(id)) {
      return id;
    }
  }
}

function addStyles(
  containerId: string,
  { formId, inputClassNames, inputWrapperClassNames }: HubspotFormProps
): void {
  const wrapperEl = document.querySelector(`#${containerId} form`);
  if (wrapperEl) {
    const inputEl = wrapperEl.querySelector(`#email-${formId}`);
    if (inputEl && inputClassNames) {
      inputEl.className += ` ${inputClassNames}`;
      if (inputEl.parentElement)
        inputEl.parentElement.className += ` ${inputWrapperClassNames}`;
    }
  }
}

export const HubspotForm = ({
  formId,
  inputClassNames,
  inputWrapperClassNames,
  wrapperClassNames,
  submitClassNames,
  className,
  onSubmit,
}: HubspotFormProps) => {
  const [hubspotLoadCheck, setHubspotLoadCheck] =
    useState<Promise<void> | null>(null);

  const [formContainerId, setFormContainerId] = useState<string | null>(null);

  useEffect(() => {
    setHubspotLoadCheck(waitForCondition(() => Boolean(window.hbspt)));
    setFormContainerId(generateContainerId());

    getScript() || appendScript();
  }, []);

  useEffect(() => {
    if (hubspotLoadCheck && formContainerId) {
      hubspotLoadCheck.then(() => {
        window.hbspt.forms
          .create({
            target: `#${formContainerId}`,
            region: "na1",
            portalId: "20249188",
            formId,
            errorMessageClass: "force-hide",
            cssClass: wrapperClassNames,
            errorClass: inputClassNames,
            submitButtonClass: submitClassNames,
          })
          .onReady(() =>
            addStyles(formContainerId, {
              formId,
              inputClassNames,
              inputWrapperClassNames,
            })
          );
      });
    }
  }, [
    formId,
    hubspotLoadCheck,
    formContainerId,
    wrapperClassNames,
    inputClassNames,
    submitClassNames,
    inputWrapperClassNames,
    onSubmit,
  ]);

  useEffect(() => {
    window.addEventListener("message", handler);
    return () => {
      window.removeEventListener("message", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handler(event: MessageEvent) {
    if (
      event.data.type === "hsFormCallback" &&
      event.data.eventName === "onFormSubmitted"
    ) {
      if (event.data.id === formId) {
        onSubmit && onSubmit();
      }
    }
  }

  return <div className={className} id={formContainerId || ""}></div>;
};
