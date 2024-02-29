// import ChapterTopics from "../components/ChapterTopics";
import ContainerBig from "../components/ContainerBig";
import Topic from "../components/Topic";
export default function Chapters() {
  return (
    <ContainerBig>
      <ul className="flex flex-col p-2 pr-3   lg:p-6 w-3/4 h-5/6 bg-primary rounded-xl lg:rounded-3xl overflow-y-scroll overflow-x-hidden">
        <Topic
          p={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam totam amet odio ullam sapiente eum fuga voluptate magnam accusamus voluptatum."
          }
          heading={"Beginner's Luck"}
          percent={70}
        />
        <Topic
          p={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam totam amet odio ullam sapiente eum fuga voluptate magnam accusamus voluptatum."
          }
          heading={"Beginner's Luck"}
          percent={70}
        />
        <Topic
          p={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam totam amet odio ullam sapiente eum fuga voluptate magnam accusamus voluptatum."
          }
          heading={"Beginner's Luck"}
          percent={70}
        />
        <Topic
          p={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam totam amet odio ullam sapiente eum fuga voluptate magnam accusamus voluptatum."
          }
          heading={"Beginner's Luck"}
          percent={70}
        />
        <Topic
          p={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam totam amet odio ullam sapiente eum fuga voluptate magnam accusamus voluptatum."
          }
          heading={"Beginner's Luck"}
          percent={70}
        />
      </ul>
    </ContainerBig>
  );
}
