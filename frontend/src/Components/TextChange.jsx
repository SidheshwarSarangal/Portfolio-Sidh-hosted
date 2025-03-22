import React from "react";
import { useState, useEffect } from "react";
const TextChange = () => {
  const texts = ["Web Development", "Backend", "Frontend","Software Dev","Database","Student@IITR","Passionate Techie!!!!"];
  const [currenText, setCurrentText] = useState("");
  const [endValue, setendValue] = useState(true);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));
      if (isForward) {
        setendValue((prev) => prev + 1);
      } else {
        setendValue((prev) => prev - 1);
      }
      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }
      if (endValue < 2.1) {
        setIsForward(true);
        setIndex((prev) => (prev+1) % texts.length);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return <div className="text-2xl transition ease duration-300 text-purple-300  md:text-4xl tracking-tight">{currenText}</div>;
};

export default TextChange;