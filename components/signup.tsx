import { Button } from "@/components/ui/Button";

type SignupProps = {
  title?: string;
  subtitle?: string;
};

export const Signup = ({ title, subtitle }: SignupProps) => {
  return (
    <div className="signup">
      <div className="container flex flex-col items-center py-[5rem]">
        <h3 className="flex justify-center text-center mb-5 text-[24px] md:justify-start text-dark-blue">
          {title}
        </h3>
        <Button
                  width="197px"
                  height="53px"
                  asLink
                  target="_blank"
                  href="http://koii.me/gaming"
                  className="px-6 py-3 w-[190px] bg-koiiblue text-lightmint text-normal rounded-[32px] drop-shadow-lg"
                  label="Get in Touch"
        />
       
      </div>
      <p className="flex justify-center text-center text-[24px] md:justify-start text-dark-blue">
        {subtitle}
      </p>
    </div>
  );
};
