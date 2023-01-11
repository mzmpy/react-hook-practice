import DemoTab from "./views/DemoTab";
import { Outlet } from "react-router-dom";

const tabs = ["CodeSplitting", "Context"];

export default function App() {
  return (
    <div>
      <DemoTab tabs={tabs}></DemoTab>
      <Outlet></Outlet>
    </div>
  );
}
