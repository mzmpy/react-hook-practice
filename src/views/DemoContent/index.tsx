import { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

import "./index.css";

export default function DemoContent() {
  const location = useLocation();
  const elemName = location.pathname.match(/\/([^/]*)$/)?.[1] || "";
  return (
    <div className="contents-container">
      {(() => {
        const Element = lazy(() => import(`../${elemName}`));
        return (
          <Suspense fallback={<div>Loading ...</div>}>
            <Element></Element>
          </Suspense>
        );
      })()}
    </div>
  );
}
