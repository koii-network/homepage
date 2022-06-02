import { FooterLink } from "./footer-link";

export const Policy = () => {
  return (
    <div>
      <ul className="flex gap-6">
        <FooterLink
          title={"Contest Terms & Conditions"}
          url={"https://koii.network/Contest_TC_-_Cheeky_Lil_Contest.pdf"}
        />
        <FooterLink
          title={"Privacy Polic"}
          url={"https://koii.network/Privacy_Policy.pdf"}
        />
        <FooterLink
          title={"Terms of Service"}
          url={"https://koii.network/TOU_June_22_2021.pdf"}
        />
      </ul>
    </div>
  );
};
