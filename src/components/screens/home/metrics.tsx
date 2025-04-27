import { PageMainHeader, PageMainSubHeader } from "./home-headers";

export default function KeyMetricsHome() {
  return (
    <div className="large-max:px-0 max-w-screen-large-max mx-auto my-12 w-full px-[5%]">
      <PageMainSubHeader content="bolt router Key Metrics" />
      <PageMainHeader content="Network Statistics" className="mb-4 mt-8" />

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-5">
        {metrics.map((metric) => (
          <div key={metric.title} className="flex flex-col gap-3">
            <PageMainSubHeader
              content={metric.title}
              className="text-left font-medium tracking-wide lg:text-xs"
            />
            <PageMainHeader
              content={metric.value}
              className="text-left font-normal leading-tight lg:text-[40px] 2xl:text-[40px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const metrics = [
  { title: "TOTAL VALUE LOCKED", value: "$735.8M" },
  { title: "TOTAL LIQUIDITY", value: "$247.3M" },
  { title: "TOTAL VALIDATOR BOND", value: "$488.5M" },
  { title: "LIFETIME VOLUME", value: "$669.4B" },
  { title: "TOTAL POOL EARNINGS", value: "$99.2M" },
];
