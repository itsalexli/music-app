import Display from "./Display.jsx";

//Backend returns
export const measureNum = 10;

export const noteList = [
  { measure: 1, step: "F", type: "half" },
  { measure: 1, step: "F", type: "half" },
  { measure: 1, step: "F", type: "half" },
  { measure: 1, step: "F", type: "half" },
  { measure: 1, step: "F", type: "half" },
  { measure: 1, step: "F", type: "half" },
  { measure: 1, step: "F", type: "half" },
  { measure: 1, step: "F", type: "half" },
  { measure: 1, step: "F", type: "half" },

  { measure: 2, step: "B", type: "sixteen" },
  { measure: 3, step: "F", type: "whole" },

  { measure: 5, step: "F", type: "whole" },
  { measure: 5, step: "F", type: "whole" },
  { measure: 5, step: "F", type: "whole" },
  { measure: 5, step: "F", type: "whole" },
  { measure: 5, step: "F", type: "whole" },
  { measure: 5, step: "F", type: "whole" },
  { measure: 5, step: "F", type: "whole" },

];

function App() {
  return <Display />;
}

export default App;
