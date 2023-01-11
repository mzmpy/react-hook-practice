export default function Tab({ onTabSelect }: IProps) {
  return (
    <div style={{ display: "flex" }}>
      <button onClick={() => onTabSelect("comments")}>Comments</button>
      <button onClick={() => onTabSelect("photos")}>Photos</button>
    </div>
  );
}

interface OnTabSelect {
  (selectType: string): void;
}

interface IProps {
  onTabSelect: OnTabSelect;
}
