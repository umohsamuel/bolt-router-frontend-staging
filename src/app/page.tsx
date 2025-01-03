import { PageCircularLoader } from "@/components/loaders";
import { PageReRouter } from "@/components/router";

export default function Home() {
  return (
    <div className="flex w-full items-center justify-center">
      <PageReRouter redirectPath="/protocol/stable">
        <PageCircularLoader />
      </PageReRouter>
    </div>
  );
}
