import { HubspotForm } from "@/components/subscribe/hubspot-form";

type SignupProps = {
  title?: string;
  subtitle?: string;
};

export const Signup = ({ title, subtitle }: SignupProps) => {
  return (
    <div className="signup">
      <div className="container flex flex-col items-center my-[5rem]">
        <h3 className="flex justify-center text-center mb-5 text-[24px] md:justify-start text-dark-blue">
          {title}
        </h3>

        <HubspotForm
          formId={"b31f31bd-fffc-4ddb-84ff-f2448a776773"}
          wrapperClassNames={
            "p-1 bg-white border border-solid border-dark-blue rounded-[32px] md:w-[588px] flex flex-row justify-between subscribe-button"
          }
          inputClassNames={
            " outline-none bg-none focus:border-none w-[184px] md:w-[324px]"
          }
          inputWrapperClassNames={"ml-4 pt-3"}
          submitClassNames={
            "bg-koiiblue text-lightmint rounded-[24px] w-[142px] h-[48px] text-base"
          }
        />
      </div>
      <p className="flex justify-center text-center text-[24px] md:justify-start text-dark-blue">
        {subtitle}
      </p>
    </div>
  );
};
