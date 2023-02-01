import { HubspotForm } from "@/components/subscribe/hubspot-form";

export const Subscribe = () => {
  return (
    <div>
      <h3 className="flex justify-center mb-5 text-sm uppercase md:justify-start">
        Get in the Node
      </h3>

      <HubspotForm
        formId={"b31f31bd-fffc-4ddb-84ff-f2448a776773"}
        wrapperClassNames={
          "p-1 bg-white border border-solid border-dark-blue rounded-[32px] md:w-[400px] flex flex-row justify-between subscribe-button"
        }
        inputClassNames={" outline-none bg-none focus:border-none md:w-[224px]"}
        inputWrapperClassNames={"ml-4 pt-3"}
        submitClassNames={
          "bg-[#4E4E8D] text-white rounded-[24px] w-[142px] h-[48px] text-[12px] uppercase"
        }
      />

      <div className="mt-5 ml-4 text-sm">
        © Koii Foundation 2022, All Rights Reserved.
      </div>
    </div>
  );
};
