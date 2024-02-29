export default function AnswerButton({
  text,
  ans,
  choice,
  value,
  handleWindow,
}) {
  var color = "#395E59";
  // console.log(choice);
  if (value === choice.selectedOption && ans !== text) {
    color = "#d60202";
  }
  if (ans === text && choice.selectedOption !== "-1") color = "#95AB3C";

  function onSelect() {
    // setChoice((prevChoice) => {
    //   return {
    //     ...prevChoice,
    //     selectedOption: value,
    //     selectedOptionText: text,

    //   };
    // });
    handleWindow({
      open: false,
      selectedOption: value,
      selectedOptionText: text,
    });
  }

  return (
    <button
      disabled={choice.selectedOption !== "-1"}
      style={{ backgroundColor: `${color}` }}
      onClick={onSelect}
      className={`w-2/5 h-3/4 rounded-lg bg-[#395E59]`}
    >
      {text}
    </button>
  );
}
