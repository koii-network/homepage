import { FooterLink } from "./footer-link";

export const Policy = () => {
  return (
    <div className="mb-3 md:mb-0">
      <ul className="flex flex-wrap justify-center gap-2 md:gap-6">
        <div className="w-[100%] md:w-max">
          <FooterLink
            title={"Contest Terms & Conditions"}
            url={"https://koii.network/Contest_TC_-_Cheeky_Lil_Contest.pdf"}
          />
        </div>

        <FooterLink title={"Privacy Polic"} url={"/Privacy_Policy.pdf"} />
        <FooterLink title={"Terms of Service"} url={"/TOU_June_22_2021.pdf"} />
      </ul>
    </div>
  );
};
