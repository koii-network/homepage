import { Button } from "@/components/ui/Button";
import { HubspotFormLinks } from "config/links-config";
import { PartnersBottom } from "./partners-bottom";

export const MorePartners = () => (
  <div className="flex flex-col items-center">
    <div className="flex flex-col items-center mt-4 mb-7">
      <p className="text-xl font-semibold text-dark-blue">Just kidding...</p>
      <p className="flex text-xl text-center text-dark-blue">
        There’s room for everyone!
        <br className="md:hidden" /> Earn more for being early.
      </p>
    </div>

    <Button
      asLink
      href={HubspotFormLinks.PARTNERSHIP}
      className="px-6 w-[220px] h-[53px] py-3 mb-10 bg-white text-dark-blue rounded-[32px] drop-shadow-lg"
      label="Partner with Koii"
    />

    <PartnersBottom />
  </div>
);
