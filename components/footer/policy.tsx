import { FooterLink } from "./footer-link";

export const Policy = () => {
  return (
    <div>
      <ul className="flex gap-6">
        <FooterLink title={"Privacy Polic"} url={"/Privacy_Policy.pdf"} />
        <FooterLink title={"Terms of Service"} url={"/TOU_June_22_2021.pdf"} />
      </ul>
    </div>
  );
};
