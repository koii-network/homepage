import { Button } from "@/components/ui/Button";
import { HubspotFormLinks } from "config/links-config";

export const ApplyButton = () => (
  <Button
    width="190px"
    height="53px"
    asLink
    target="_blank"
    href={HubspotFormLinks.GRANT}
    className="px-6 py-3 w-[190px] bg-white text-dark-blue text-normal rounded-[32px] drop-shadow-lg"
    label="Apply Now"
  />
);
