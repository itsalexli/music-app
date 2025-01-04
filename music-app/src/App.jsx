import Display from "./Display.jsx";

//Backend returns
export const measureNum = 10;

export const noteList = [
  { measure: 5, step: "C", type: "16" },
  { measure: 1, step: "G", type: "8" },
  { measure: 1, step: "G", type: "half" },
  { measure: 1, step: "G", type: "whole" },
];

function App() {
  return <Display />;
}

export default App;
