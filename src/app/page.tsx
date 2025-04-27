import { PageCircularLoader } from "@/components/loaders";
import { PageReRouter } from "@/components/router";
import { routes } from "@/lib/routes";

export default function Home() {
  return (
    <div className="flex w-full items-center justify-center">
      <PageReRouter redirectPath={routes.about}>
        <PageCircularLoader />
      </PageReRouter>
    </div>
  );
}
