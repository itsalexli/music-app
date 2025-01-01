import Display from "./Display.jsx";

//Backend returns
export const measureNum = 10;

export const noteList = [
  { measure: 5, step: "C" },
  { measure: 1, step: "G" },
  { measure: 1, step: "G" },
  { measure: 1, step: "G" },
  { measure: 1, step: "G" },
  { measure: 1, step: "G" },
  { measure: 1, step: "G" },
  { measure: 1, step: "A" },
  { measure: 3, step: "A" },
  { measure: 4, step: "B" },
  { measure: 5, step: "C" },
  { measure: 6, step: "D" },
  { measure: 7, step: "E" },
];

function App() {
  return <Display />;
}

export default App;
