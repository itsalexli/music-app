import MeasurePic from "./assets/measure.png";
import Note from "./Note";

function Measure({ measure, notes }) {
  // Filter notes relevant to this measure
  const measureNotes = notes.filter((note) => note.measure === measure);

  return (
    <div className="measure-container">
      <img className="measure" src={MeasurePic} alt={`Measure ${measure}`} />
      <ul className="note-container">
        {measureNotes.map((note) => (
          <li key={`${note.measure}-${note.step}-${type}`}>
            <Note {...note} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Measure;
