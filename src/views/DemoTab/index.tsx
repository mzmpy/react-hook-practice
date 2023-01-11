import { Link } from "react-router-dom";
import "./index.css";

export default function DemoTab(props: Iprops) {
  return (
    <div className="tabs-container">
      {props.tabs.map((item) => {
        return (
          <div className="tab-item" key={item}>
            <Link to={"/" + item}>{item}</Link>
          </div>
        );
      })}
    </div>
  );
}

interface Iprops {
  tabs: Array<string>;
}
