import { CurrentStep } from "./index";

interface Props {
  currentStep: CurrentStep;
  originalPosition: string;
  shiftedPosition: string;
  index: number;
}

export const Buoy = ({
  currentStep,
  originalPosition,
  shiftedPosition,
  index,
}: Props) => {
  const classes = `transition-all ease-in-out duration-500 relative ${
    currentStep >= 1 && currentStep < index + 1
      ? shiftedPosition
      : originalPosition
  } w-2.5 h-2.5 bg-purple rounded-full -left-1`;

  return <div className={classes} />;
};
