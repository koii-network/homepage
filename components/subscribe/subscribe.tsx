import { Button } from "@/components/ui/Button";

export const Subscribe = () => {
  const handleSubscribe = () => {
    /**
     * @todo: implement subscribe
     */
    console.log("handle subscribe");
  };

  return (
    <div>
      <h3 className="mb-5 text-sm uppercase text-dark-blue">GET IN THE NODE</h3>
      <div className="p-1 bg-white border border-solid rounded-[32px] md:w-[400px] flex flex-row justify-between focus-within:border">
        <input
          className="ml-4 outline-none bg-none focus:border-none w-[224px]"
          placeholder="Email address"
        />
        <Button
          onClick={handleSubscribe}
          label={"SUBSCRIBE"}
          className=" bg-dark-blue text-white rounded-[24px] w-[142px] h-[48px] text-base uppercase"
        />
      </div>

      <div className="mt-5 ml-4 text-sm text-dark-blue">
        ©KOI Co. 2021 All Rights Reserved, 2021.
      </div>
    </div>
  );
};
