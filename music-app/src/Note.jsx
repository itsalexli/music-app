import Whole from "./assets/whole.png";
import Half from "./assets/half.png";
import Eight from "./assets/eight.png";
import Sixteen from "./assets/sixteen.png";

// Function to calculate vertical position based on step
function getStepPosition(step) {
  const linePixelDiff = 7;
  const basePixel = 44;
  const stepMap = {
    C: basePixel - 4 * linePixelDiff,
    D: basePixel - 5 * linePixelDiff,
    E: basePixel - 6 * linePixelDiff,
    F: basePixel - 0 * linePixelDiff,
    G: basePixel - 1 * linePixelDiff,
    A: basePixel - 2 * linePixelDiff,
    B: basePixel - 3 * linePixelDiff,
  };

  return stepMap[step]; // Default to the baseline if step is unknown
}

function getTypeImg(type) {
  if (type === "whole") {
    return Whole;
  } else if (type === "half") {
    return Half;
  } else if (type === "eight") {
    return Eight;
  } else if (type === "sixteen") {
    return Sixteen;
  }
}

function Note({ measure, step, type }) {
  const position = getStepPosition(step);
  const notePic = getTypeImg(type);

  return (
    <img
      className="note"
      src={notePic}
      alt={`Note at measure ${measure}, step ${step}, type ${type}`}
      style={{ position: "relative", top: `${position}px` }}
    />
  );
}

export default Note;
