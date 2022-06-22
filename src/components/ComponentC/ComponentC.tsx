import React from "react";

export function ComponentC() {
  return <div>ComponentC</div>;
}

export default React.memo(ComponentC);
