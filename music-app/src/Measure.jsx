import MeasurePic from "./assets/measure.png";
import BarPic from "./assets/bar.png";
import Note from "./Note";
import { measureNum, noteList } from "./App";
const notePerBar = 6; //pre determined number of notes per bar image

function createNoteCountDictionary() {
  //need to account for a bar with 0 notes
  let noteDictionary = {}; //creates a dictionary where the key is the measure # and the value is the number of notes in that measure
  for (let i = 0; i < noteList.length; i++) {
    if (!(noteList[i].measure in noteDictionary)) {
      noteDictionary[noteList[i].measure] = 1;
    } else {
      noteDictionary[noteList[i].measure] += 1;
    }
  }
  return noteDictionary;
}

function Measure({ measure, notes }) {
  // Filter notes relevant to this measure
  const measureNotes = notes.filter((note) => note.measure === measure);
  const measureBarCount = Math.floor(
    createNoteCountDictionary()[measure] / notePerBar
  );
  console.log(measureBarCount);

  return (
    <div className="measure-container">
      <img className="bar" src={BarPic} alt={`Bar ${measure}`} />
      {Array.from({ length: measureBarCount }).map((_, index) => (
        <img className="measure" src={MeasurePic} alt={`Measure ${measure}`} />
      ))}
      <img className="measure" src={MeasurePic} alt={`Measure ${measure}`} />
      <ul className="note-container">
        {measureNotes.map((note, index) => (
          <li key={`${note.measure}-${note.step}-${index}`}>
            <Note {...note} />
          </li>
        ))}
      </ul>
      <img className="bar" src={BarPic} alt={`Bar ${measure}`} />
    </div>
  );
}

export default Measure;
