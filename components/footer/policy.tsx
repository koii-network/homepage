import { FooterLink } from "./footer-link";

export const Policy = () => {
  return (
    <div>
      <ul className="flex gap-6">
        <FooterLink title={"Contest Terms & Conditions"} url={"/"} />
        <FooterLink title={"Privacy Polic"} url={"/"} />
        <FooterLink title={"Terms of Service"} url={"/"} />
      </ul>
    </div>
  );
};
