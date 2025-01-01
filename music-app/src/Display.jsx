import Measure from "./Measure";
import { measureNum, noteList } from "./App";

function Display() {
  // Create an array of measure numbers
  const measurePicList = [];
  for (let i = 1; i <= measureNum; i++) {
    measurePicList.push(i);
  }

  return (
    <div className="display">
      <ul className="measure-list">
        {measurePicList.map((measure) => (
          <li key={measure}>
            <Measure measure={measure} notes={noteList} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Display;
