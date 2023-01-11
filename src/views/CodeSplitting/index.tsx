import { lazy, Suspense, startTransition, useState } from "react";
import Tabs from "./Tab";

const Comments = lazy(() => import("./Comments"));
const Photos = lazy(() => import("./Photos"));

export default function CodeSplitting() {
  const [tab, setTab] = useState("photos");

  function handleTabSelect(tab: string) {
    startTransition(() => {
      setTab(tab);
    });
  }

  return (
    <div>
      <Tabs onTabSelect={handleTabSelect} />
      <Suspense fallback={<div>Loading...</div>}>
        {tab === "photos" ? <Photos /> : <Comments />}
      </Suspense>
    </div>
  );
}
