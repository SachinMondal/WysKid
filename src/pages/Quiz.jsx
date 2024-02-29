import { useState } from "react";
import ContainerBig from "../components/ContainerBig";

import Window from "../components/Window";
import QuizSection from "../components/QuizSection";

export default function Quiz() {
  const [open, setOpen] = useState({
    open: true,
    selectedOption: "-1",
    selectionOptionText: "-1",
  });
  // console.log(open + "from quiz..");
  function handleWindow(obj) {
    setOpen({ ...obj });
  }
  return (
    <ContainerBig>
      {!open.open && (
        <Window data={open} handleWindow={(object) => handleWindow(object)} />
      )}
      {open.open && (
        <QuizSection
          data={open}
          handleWindow={(object) => handleWindow(object)}
        />
      )}
    </ContainerBig>
  );
}
