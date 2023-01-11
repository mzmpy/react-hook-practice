import { useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState("");
  setTimeout(() => {
    setComments("Comments");
  }, 1500);

  return <div>{comments}</div>;
}
