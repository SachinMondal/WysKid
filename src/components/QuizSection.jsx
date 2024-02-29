import Progress from "./Progress";
import Timer from "./Timer";
import AnswerButton from "./AnswerButton";
import { ans } from "../dummyFolder/ans";
import { useState } from "react";

const shuffled = [...ans];
shuffled.sort(() => Math.random() - 0.5);
export default function QuizSection({ data, handleWindow }) {
  const [choice, setChoice] = useState({
    ...data,
  });
  return (
    <div className="flex items-center justify-start flex-col p-3 lg:p-6 rounded-xl lg:rounded-3xl bg-primary w-3/4 h-5/6">
      <div className=" h-[45%] mb-2 rounded-xl  w-full bg-secondary">
        <img src="" alt="" />
      </div>
      <Progress percent={100} />
      {/* <Timer time={10_000} onExpire={(obj) => setChoice(obj)} /> */}
      <p className="max-h-[18%] lg:max-h-[25%]  pt-2 pb-2 text-sm/[0.9rem] lg:text-xl/6 font-light overflow-auto">
        What is my name Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eos sapiente dolorum molestiae voluptates numquam quae officia? Fugit ab
        corporis dolore! Laborum odio ipsa obcaecati veritatis! Ab sequi
      </p>
      <div className=" flex flex-col items-center h-[30%] w-full  ">
        <div className="flex flex-row items-center justify-evenly h-1/2 w-full">
          <AnswerButton
            text={shuffled[0]}
            ans={ans[0]}
            setChoice={setChoice}
            choice={choice}
            value={"0"}
            handleWindow={handleWindow}
          />
          <AnswerButton
            text={shuffled[1]}
            ans={ans[0]}
            setChoice={setChoice}
            choice={choice}
            value={"1"}
            handleWindow={handleWindow}
          />
        </div>
        <div className="flex flex-row items-center justify-evenly h-1/2 w-full">
          <AnswerButton
            text={shuffled[2]}
            ans={ans[0]}
            setChoice={setChoice}
            choice={choice}
            value={"2"}
            handleWindow={handleWindow}
          />
          <AnswerButton
            text={shuffled[3]}
            ans={ans[0]}
            setChoice={setChoice}
            choice={choice}
            value={"3"}
            handleWindow={handleWindow}
          />
        </div>
      </div>
      <div className="w-full h-[6%] flex items-center justify-between">
        <button
          onClick={() =>
            handleWindow({
              ...choice,
              open: false,
            })
          }
          disabled={choice.selectedOption === "-1"}
          className="w-1/3 h-full bg-green-600 rounded-lg"
        >
          Ans 🔒
        </button>
        <button
          disabled={choice.selectedOption === "-1"}
          className="w-1/3 h-full bg-green-600 rounded-lg"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
}
