import Display from "./Display.jsx";
import Upload from "./Upload.jsx";

//Backend returns
export const measureNum = 10;

export const noteList = [
  { measure: 1, step: "F", type: "half" },
  { measure: 1, step: "G", type: "eight" },
  { measure: 1, step: "A", type: "half" },
  { measure: 2, step: "B", type: "sixteen" },
];

function App() {
  return (
    <>
      <Display />;
      <Upload />
    </>
  );
}

export default App;
