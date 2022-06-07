import { HubspotForm } from "@/components/subscribe/hubspot-form";
import { useState } from "react";

export const SubscribeBar = () => {
  const [stage, setStage] = useState<"edit" | "thankyou">("edit");

  const switchView = () => {
    setStage("thankyou");
  };

  return (
    <div className="bg-koiiblue h-[100px] md:h-[54px] flex items-center fixed bottom-0 left-0 right-0">
      {stage === "edit" ? (
        <div className="md:max-w-[1060px] w-[100%]  md:mx-auto px-8 flex justify-center items-center flex-col md:flex-row">
          <div className="flex justify-center items-center flex-row">
            <div className={"pr-4"}>
              <h3 className=" uppercase text-mint text-sm md:text-base">
                STAY IN THE KNOW!
              </h3>
            </div>
            <div className={"pr-9"}>
              <span className="text-white text-sm md:text-base">
                Get In The Node:
              </span>
            </div>
          </div>
          <HubspotForm
            formId={"b31f31bd-fffc-4ddb-84ff-f2448a776773"}
            wrapperClassNames={
              "p-1 bg-white border border-solid border-dark-blue rounded-[32px] flex flex-row justify-between subscribe-button"
            }
            inputClassNames={
              "outline-none bg-none focus:border-none w-[224px] text-xs"
            }
            inputWrapperClassNames={"ml-4 pt-1"}
            submitClassNames={
              "bg-koiiorange rounded-[24px] px-4 h-[30px] text-xs"
            }
            className={"grow"}
            onSubmit={switchView}
          />
        </div>
      ) : (
        <div className="md:max-w-[1060px] md:mx-auto py-4 px-8 flex justify-center items-center">
          <h3 className="uppercase text-koiiorange uppercase">
            you&apos;re on the list!
          </h3>
        </div>
      )}
    </div>
  );
};
