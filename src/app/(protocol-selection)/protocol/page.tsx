import { InlineCircularLoader } from "@/components/loaders";
import { PageReRouter } from "@/components/router";
import { routes } from "@/lib/routes";

export default function ProtocolPageRerouter() {
  return (
    <div className="flex w-full items-center justify-center">
      <PageReRouter redirectPath={routes.protocol.stable}>
        <InlineCircularLoader />
      </PageReRouter>
    </div>
  );
}
