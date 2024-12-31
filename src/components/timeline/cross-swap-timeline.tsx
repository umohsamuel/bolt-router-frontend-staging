"use client";

import { useCrossSwapStore } from "@/zustand/providers";
import { TimelineElement, VerticalTimeline } from "./base-timeline";
import { crossSwapSteps } from "@/lib";

export default function CrossSwapTimeline() {
  const currentStep = useCrossSwapStore((state) => state.timelineStep);

  return (
    <div>
      <VerticalTimeline>
        {crossSwapSteps({ currentStep }).map((step, index) => (
          <TimelineElement
            key={index}
            icon={step.icon}
            iconBackground={
              step.status === "complete"
                ? "#22c55e"
                : step.status === "active"
                  ? "#3b82f6"
                  : "#6b7280"
            }
            position="left"
          >
            <h3 className="text-nowrap text-sm font-semibold text-[#DCDCE4]">
              {step.title}
            </h3>
            {currentStep === index + 1 && (
              <ul className="mt-4 flex list-disc flex-col items-center gap-2 text-[10px] font-normal text-[#9B9B9B]">
                <li>Minimum Crosschain Amount is 0.08 BNB</li>
                <li>Maximum Crosschain Amount is 12,000 BNB</li>
                <li>Estimated Time of Crosschain Arrival is 10–30 min </li>
                <li>
                  Crosschain amount larger than 2,100 BNB could take up to 12
                  hours
                </li>
              </ul>
            )}
          </TimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
