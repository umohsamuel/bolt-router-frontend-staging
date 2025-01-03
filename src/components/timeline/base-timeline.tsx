import React, { ReactNode } from "react";

interface TimelineElementProps {
  children: ReactNode;
  icon?: ReactNode;
  iconBackground?: string;
  date?: string;
  position?: "left" | "right";
  contentStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
  className?: string;
}

interface TimelineProps {
  children: ReactNode;
  animate?: boolean;
  lineColor?: string;
  className?: string;
}

export const TimelineElement: React.FC<TimelineElementProps> = ({
  children,
  icon,
  iconBackground = "#3b82f6",
  // date,
  // position = "right",
  contentStyle,
  iconStyle,
  className = "",
}) => {
  return (
    <div className={`mb-8 flex w-full items-center last:mb-0 ${className}`}>
      <div className="z-20 ml-[calc(16.666%-1rem)] flex h-8 w-8 items-center rounded-full">
        <div
          className="flex h-full w-full items-center justify-center rounded-full"
          style={{ background: iconBackground, ...iconStyle }}
        >
          {icon || <span className="text-sm text-white">•</span>}
        </div>
      </div>
      <div className="w-9/12 pl-8">
        <div
          className="animate-fadeIn rounded pb-4 pt-4 shadow-lg last:pb-0"
          style={{ ...contentStyle }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const VerticalTimeline: React.FC<TimelineProps> = ({
  children,
  animate = true,
  lineColor = "#4b5563",
  className = "",
}) => {
  return (
    <div className={`relative mx-auto w-full max-w-7xl ${className}`}>
      <div className="relative">
        {/* Content with line that starts and ends with content */}
        <div className="relative pb-4 pt-4 last:pb-0">
          {/* Vertical Line - now starts and ends with content */}
          <div
            className="absolute left-[16.666%] top-8 -ml-px h-[calc(100%-2rem)] w-0.5"
            style={{ background: lineColor }}
          />

          {/* Content */}
          {React.Children.map(children, (child) => {
            if (!React.isValidElement<TimelineElementProps>(child)) return null;

            return React.cloneElement(child, {
              ...child.props,
              className: `${child.props.className || ""} ${
                animate ? "animate-slideIn" : ""
              }`,
            } as TimelineElementProps);
          })}
        </div>
      </div>
    </div>
  );
};
