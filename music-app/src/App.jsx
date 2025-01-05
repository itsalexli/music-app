import Display from "./Display.jsx";
import Upload from "./Upload.jsx";

//Backend returns
export const measureNum = 10;

export const noteList = [
  { measure: 1, step: "F", type: "half" },
  { measure: 1, step: "F", type: "half" },
  { measure: 1, step: "F", type: "half" },
  { measure: 1, step: "F", type: "half" },
  { measure: 1, step: "F", type: "half" },
  { measure: 1, step: "F", type: "half" },
  { measure: 1, step: "F", type: "sixteen" },
  { measure: 2, step: "B", type: "sixteen" },
  { measure: 3, step: "F", type: "whole" },
  { measure: 6, step: "F", type: "whole" },
  { measure: 6, step: "F", type: "whole" },
  { measure: 6, step: "F", type: "whole" },
  { measure: 6, step: "F", type: "whole" },
  { measure: 6, step: "F", type: "whole" },
  { measure: 6, step: "F", type: "whole" },
  { measure: 6, step: "F", type: "whole" },
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
