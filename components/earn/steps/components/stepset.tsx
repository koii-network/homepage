import { MouseEvent } from "react";

export const Step1IN = (e: MouseEvent<HTMLDivElement>) => {
  e.preventDefault();
  // Do something
  if (typeof window !== "undefined") {
    const Stepcard = document.getElementById("Stepcard");
    const Step1 = document.getElementById("Step1Full");
    const Stepbox = document.getElementById("stepbox");
    const Anchor = document.getElementById("subtitle");
    if (Stepcard != null && Step1 != null && Stepbox != null) {
      Stepcard.style.visibility = "hidden";
      Stepcard.style.opacity = "0";
      Step1.style.opacity = "1";
      Step1.style.visibility = "visible";
      //   Stepbox.classList.add("h-[950px]");
    }
    if (Anchor != null) {
      Anchor.scrollIntoView();
    }
  }
};
export const Button1 = (e: MouseEvent<HTMLDivElement>) => {
  e.preventDefault();
  // Do something
  if (typeof window !== "undefined") {
    const Stepcard = document.getElementById("Stepcard");
    const Step1 = document.getElementById("Step1Full");
    const Stepbox = document.getElementById("stepbox");
    const Anchor = document.getElementById("subtitle");
    const Step2 = document.getElementById("Step2Full");
    if (Stepcard != null && Step1 != null && Step2 != null && Stepbox != null) {
      Stepcard.style.visibility = "hidden";
      Stepcard.style.opacity = "0";
      Step2.style.opacity = "0";
      Step2.style.visibility = "hidden";
      Step1.style.opacity = "1";
      Step1.style.visibility = "visible";
      //   Stepbox.classList.add("h-[950px]");
    }
    if (Anchor != null) {
      Anchor.scrollIntoView();
    }
  }
};
export const Button2 = (e: MouseEvent<HTMLDivElement>) => {
  e.preventDefault();
  // Do something
  if (typeof window !== "undefined") {
    const Stepcard = document.getElementById("Stepcard");
    const Step1 = document.getElementById("Step1Full");
    const Stepbox = document.getElementById("stepbox");
    const Anchor = document.getElementById("subtitle");
    const Step2 = document.getElementById("Step2Full");
    if (Stepcard != null && Step1 != null && Step2 != null && Stepbox != null) {
      Stepcard.style.visibility = "hidden";
      Stepcard.style.opacity = "0";
      Step1.style.opacity = "0";
      Step1.style.visibility = "hidden";
      Step2.style.opacity = "1";
      Step2.style.visibility = "visible";
      //   Stepbox.classList.add("h-[950px]");
    }
    if (Anchor != null) {
      Anchor.scrollIntoView();
    }
  }
};
export const Step1OUT = (e: MouseEvent<HTMLDivElement>) => {
  e.preventDefault();
  // Do something
  if (typeof window !== "undefined") {
    const Stepcard = document.getElementById("Stepcard");
    const Step1 = document.getElementById("Step1Full");
    const Stepbox = document.getElementById("stepbox");
    if (Stepcard != null && Step1 != null && Stepbox != null) {
      Stepcard.style.visibility = "visible";
      Stepcard.style.opacity = "1";
      Step1.style.opacity = "0";
      Step1.style.visibility = "hidden";
      Stepbox.classList.remove("h-[950px]");
    }
  }
};
export const Step2IN = (e: any) => {
  e.preventDefault();
  // Do something
  if (typeof window !== "undefined") {
    const Stepcard = document.getElementById("Stepcard");
    const Step2 = document.getElementById("Step2Full");
    const Stepbox = document.getElementById("stepbox");
    const Anchor = document.getElementById("subtitle");
    if (Stepcard != null && Step2 != null && Stepbox != null) {
      Stepcard.style.visibility = "hidden";
      Stepcard.style.opacity = "0";
      Step2.style.opacity = "1";
      Step2.style.visibility = "visible";
      //   Stepbox.classList.add("h-[950px]");
    }
    if (Anchor != null) {
      Anchor.scrollIntoView();
    }
  }
};
export const Step2OUT = (e: MouseEvent<HTMLDivElement>) => {
  e.preventDefault();
  // Do something
  if (typeof window !== "undefined") {
    const Stepcard = document.getElementById("Stepcard");
    const Step2 = document.getElementById("Step2Full");
    const Stepbox = document.getElementById("stepbox");
    if (Stepcard != null && Step2 != null && Stepbox != null) {
      Stepcard.style.visibility = "visible";
      Stepcard.style.opacity = "1";
      Step2.style.opacity = "0";
      Step2.style.visibility = "hidden";
      Stepbox.classList.remove("h-[950px]");
    }
  }
};
export const Step3IN = (e: MouseEvent<HTMLDivElement>) => {
  e.preventDefault();
  // Do something
  if (typeof window !== "undefined") {
    const Stepcard = document.getElementById("Stepcard");
    const Step3 = document.getElementById("Step3Full");
    const Stepbox = document.getElementById("stepbox");
    const Anchor = document.getElementById("subtitle");
    if (Stepcard != null && Step3 != null && Stepbox != null) {
      Stepcard.style.visibility = "hidden";
      Stepcard.style.opacity = "0";
      Step3.style.opacity = "1";
      Step3.style.visibility = "visible";
      //   Stepbox.classList.add("h-[950px]");
    }
    if (Anchor != null) {
      Anchor.scrollIntoView();
    }
  }
};
export const Step3OUT = (e: MouseEvent<HTMLDivElement>) => {
  e.preventDefault();
  // Do something
  if (typeof window !== "undefined") {
    const Stepcard = document.getElementById("Stepcard");
    const Step3 = document.getElementById("Step3Full");
    const Stepbox = document.getElementById("stepbox");
    if (Stepcard != null && Step3 != null && Stepbox != null) {
      Stepcard.style.visibility = "visible";
      Stepcard.style.opacity = "1";
      Step3.style.opacity = "0";
      Step3.style.visibility = "hidden";
      Stepbox.classList.remove("h-[950px]");
    }
  }
};
export const Step4IN = (e: MouseEvent<HTMLDivElement>) => {
  e.preventDefault();
  // Do something
  if (typeof window !== "undefined") {
    const Stepcard = document.getElementById("Stepcard");
    const Step4 = document.getElementById("Step4Full");
    const Stepbox = document.getElementById("stepbox");
    const Anchor = document.getElementById("subtitle");
    if (Stepcard != null && Step4 != null && Stepbox != null) {
      Stepcard.style.visibility = "hidden";
      Stepcard.style.opacity = "0";
      Step4.style.opacity = "1";
      Step4.style.visibility = "visible";
      //   Stepbox.classList.add("md:min-h-[900px]");
      //   Stepbox.classList.add("h-[1050px]");
    }
    if (Anchor != null) {
      Anchor.scrollIntoView();
    }
  }
};
export const Step4OUT = (e: MouseEvent<HTMLDivElement>) => {
  e.preventDefault();
  // Do something
  if (typeof window !== "undefined") {
    const Stepcard = document.getElementById("Stepcard");
    const Step4 = document.getElementById("Step4Full");
    const Stepbox = document.getElementById("stepbox");
    if (Stepcard != null && Step4 != null && Stepbox != null) {
      Stepcard.style.visibility = "visible";
      Stepcard.style.opacity = "1";
      Step4.style.opacity = "0";
      Step4.style.visibility = "hidden";
      Stepbox.classList.remove("md:min-h-[900px]");
      Stepbox.classList.remove("h-[1050px]");
    }
  }
};
