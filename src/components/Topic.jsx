import Progress from "./Progress";
export default function Topic({ heading, p, percent }) {
  return (
    <button className="flex flex-col  justify-start w-full h-1/4 lg:h-1/3 m-1 p-2 rounded-lg lg:rounded-xl bg-primary border-2 border-neutral-100">
      <div className="lg:text-4xl ">⭐⭐⭐</div>
      <h3 className="text-xl lg:pt-4 lg:pb-4 font-semibold lg:text-2xl">
        {heading}
      </h3>
      <p className="pb-2 font-extralight text-sm/[15px] lg:text-lg/[20px]">
        {p}
      </p>
      <Progress percent={percent} />
    </button>
  );
}
