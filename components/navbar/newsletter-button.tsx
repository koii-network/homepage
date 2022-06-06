import { Button } from "@/components/ui/Button";
import { HubspotFormLinks } from "config/links-config";

export const NewsletterButton = () => (
  <Button
    href={HubspotFormLinks.NEWSLETTER}
    target="_blank"
    asLink
    className="bg-faux-azure-mist text-dark-blue border-mint border-solid border-2 p-[8px] w-[186px] h-[40px] rounded-3xl leading-3"
    label={"Get the Newsletter"}
  />
);
