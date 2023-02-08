import { HubspotForm } from "@/components/subscribe/hubspot-form";
import "/styles/about.module.scss";

export const Form = () => {
  return (
    <div
      className="w-full pt-12 lg:pt-40 bg-lightmint lg:bg-faux-azure-mist"
      id="founders-form"
    >
      <div className="px-8 pb-14">
        <p className="font-sans text-3xl leading-10 font-semibold text-koiipurpledark text-center tracking-tight">
          Fill out the form to get started.
        </p>
        <p className="pt-4 font-sans text-2xl leading-8 text-koiipurpledark text-center tracking-tight lg:pt-8">
          Don’t miss the wave!
        </p>
      </div>
      <div className={`bg-white px-8 py-8 w-full lg:max-w-[1092px] lg:mx-auto`}>
        <HubspotForm
          formId={"164661e2-bfea-4f7b-9970-3fb1d789a8ca"}
          wrapperClassNames={
            "p-1 bg-white border border-solid border-dark-blue rounded-[32px] md:w-[400px] flex flex-row justify-between subscribe-button"
          }
          inputClassNames={
            "outline-none bg-none focus:border-none md:w-[224px]"
          }
          inputWrapperClassNames={"ml-4 pt-3"}
        />
      </div>
    </div>
  );
};
