import NotePic from "./assets/whole.png";

// Function to calculate vertical position based on step
function getStepPosition(step) {
  const linePixelDiff = 7;
  const basePixel = 70;
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

function Note({ measure, step }) {
  const position = getStepPosition(step);

  return (
    <img
      className="note"
      src={NotePic}
      alt={`Note at measure ${measure}, step ${step}`}
      style={{ position: "relative", top: `${position}px` }}
    />
  );
}

export default Note;
