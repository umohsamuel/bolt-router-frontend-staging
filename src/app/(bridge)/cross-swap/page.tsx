import { PageCircularLoader } from "@/components/loaders";
import { PageReRouter } from "@/components/router";

export default function CrossSwapPageRerouter() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <PageReRouter redirectPath="/cross-swap/stable">
        <PageCircularLoader />
      </PageReRouter>
    </div>
  );
}
