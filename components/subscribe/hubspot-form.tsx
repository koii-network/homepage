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
        }): unknown;
      };
    };
  }
}

interface HubspotFormProps {
  readonly formId: string;
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

// TODO: TESTS REQUIRED

export const HubspotForm = ({ formId }: HubspotFormProps) => {
  const [hubspotLoadCheck] = useState(
    waitForCondition(() => Boolean(window.hbspt))
  );

  const [formContainerId] = useState(generateContainerId());

  useEffect(() => {
    getScript() || appendScript();
  }, []);

  useEffect(() => {
    hubspotLoadCheck.then(() => {
      window.hbspt.forms.create({
        target: `#${formContainerId}`,
        region: "na1",
        portalId: "20249188",
        formId,
      });
    });
  }, [formId, hubspotLoadCheck, formContainerId]);

  return (
    <div>
      <div id={formContainerId}></div>
    </div>
  );
};
