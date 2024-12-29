import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";

interface RotatingStepIconProps {
  step: number;
  currentStep: number;
  className?: string;
}

export default function RotatingStepIcon({
  step,
  currentStep,
  className = "",
}: RotatingStepIconProps) {
  const isCompleted = currentStep > step;

  return (
    <div className={`relative h-4 w-4 ${className}`}>
      <AnimatePresence mode="wait">
        {isCompleted ? (
          <motion.div
            key="check"
            initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
              transition: {
                duration: 0.18,
                ease: "easeOut",
              },
            }}
            exit={{
              opacity: 0,
              rotate: 180,
              scale: 0.5,
              transition: {
                duration: 0.18,
                ease: "easeIn",
              },
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Check size={16} className="text-white" />
          </motion.div>
        ) : (
          <motion.div
            key="number"
            initial={{
              opacity: 0,
              rotate: -180,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
              transition: {
                duration: 0.18,
                ease: "easeOut",
              },
            }}
            exit={{
              opacity: 0,
              rotate: 180,
              scale: 0.5,
              transition: {
                duration: 0.18,
                ease: "easeIn",
              },
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="font-sans text-xs font-semibold text-white">
              {step}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
