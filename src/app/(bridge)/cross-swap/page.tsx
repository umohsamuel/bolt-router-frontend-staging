import { InlineCircularLoader } from "@/components/loaders";
import { PageReRouter } from "@/components/router";

export default function CrossSwapPageRerouter() {
  return (
    <div className="flex w-full items-center justify-center">
      <PageReRouter redirectPath="/cross-swap/stable">
        <InlineCircularLoader />
      </PageReRouter>
    </div>
  );
}
