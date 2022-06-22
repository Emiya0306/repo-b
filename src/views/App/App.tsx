import React from "react";

import ComponentC from "../../components/ComponentC";
import ComponentD from "../../components/ComponentD";

export function App() {
  return (
    <div>
      <h1>App</h1>
      <ComponentC />
      <ComponentD />
    </div>
  );
}

export default React.memo(App);
