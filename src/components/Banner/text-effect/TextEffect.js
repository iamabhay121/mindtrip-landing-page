import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState, useEffect } from "react";

const TextEffect = () => {
  const [text] = useTypewriter({
    words: ["better.", "together.", "differently."],
    loop: 1,
  });

  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (text === "differently.") {
      setShowCursor(false);
    }
  }, [text]);

  return (
    <>
      {text}
      {showCursor && <Cursor />}
    </>
  );
};

export default TextEffect;
