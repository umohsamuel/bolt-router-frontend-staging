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
          </TimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
