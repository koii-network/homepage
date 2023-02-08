import { Title } from "./components/Title";
import { Bubbles } from "./components/Bubbles";
import { ApplyButton } from "./components/ApplyButton";

export const GrantProgram = () => {
  return (
    <section className="grant-program h-[920px] md:h-[696px]">
      <div className="container flex flex-col justify-between mx-auto xl:py-10 md:flex-row">
        <div>
          <Title />
          <div className="hidden md:block md:mt-20">
            <ApplyButton />
          </div>
        </div>
        <div className="md:pt-24 xl:pt-0">
          <Bubbles />
        </div>
        <div className="flex justify-center md:hidden">
          <ApplyButton />
        </div>
      </div>
    </section>
  );
};
