import MeasurePic from "./assets/measure.png";
import BarPic from "./assets/bar.png";
import Note from "./Note";
import { measureNum, noteList } from "./App";
const notePerBar = 6; //pre determined number of notes per bar image

function createNoteCountDictionary() {
  //need to account for a bar with 0 notes
  let noteDictionary = {}; //creates a dictionary where the key is the measure # and the value is the number of notes in that measure
  for (let i = 1; i <= measureNum; i++){
    noteDictionary[i] = 0;
  }
  console.log(noteDictionary)
  for (let i = 0; i < noteList.length; i++){
    if (!(noteList[i].measure in noteDictionary)){
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
  let measureBarCount = 1 + Math.floor(createNoteCountDictionary()[measure]/(notePerBar));
  if (Math.floor(createNoteCountDictionary()[measure]) != 0 && (Math.floor(createNoteCountDictionary()[measure]%notePerBar) == 0)){
    measureBarCount -=1;
  }

  const measureBarCount = Math.floor(
    createNoteCountDictionary()[measure] / notePerBar
  );
  console.log(measureBarCount);

  return (
    <div className="measure-container">
      {Array.from({ length: measureBarCount }).map((_, index) => (
        <div className="bar-container">
          <img className="measure" src={MeasurePic} alt={`Measure ${measure}`} />
        </div>
      ))}
      {/* <img className="measure" src={MeasurePic} alt={`Measure ${measure}`} /> */}
      <div className="note-container">
        {measureNotes.map((note, index) => (
          <li key={`${note.measure}-${note.step}-${index}`}>
            <Note {...note} />
          </li>
        ))}
      </div>
      <img className="bar" src={BarPic} alt={`Bar ${measure}`} />
    </div>
  );
}

export default Measure;
