import { RotatingStepIcon } from "@/components/icons";

interface Step {
  title: string;
  icon: React.ReactNode;
  status: string;
}

export const crossSwapSteps = ({
  currentStep,
}: {
  currentStep: number;
}): Step[] => [
  {
    title: "Starting Swap",
    icon: <RotatingStepIcon step={1} currentStep={currentStep} />,
    status:
      currentStep > 1 ? "complete" : currentStep === 1 ? "active" : "pending",
  },
  {
    title: "Crossing Bridge",
    icon: <RotatingStepIcon step={2} currentStep={currentStep} />,
    status:
      currentStep > 2 ? "complete" : currentStep === 2 ? "active" : "pending",
  },
  {
    title: "Approving Transfer",
    icon: <RotatingStepIcon step={3} currentStep={currentStep} />,
    status:
      currentStep > 3 ? "complete" : currentStep === 3 ? "active" : "pending",
  },
  {
    title: "Complete",
    icon: <RotatingStepIcon step={4} currentStep={currentStep} />,
    status:
      currentStep > 4 ? "complete" : currentStep === 4 ? "active" : "pending",
  },
];
