export default function Progress({ percent }) {
  return (
    <div className=" flex items-center justify-start w-full h-4 rounded-lg bg-[#395E59]">
      <div
        style={{ width: `${percent}%` }}
        className="bg-[#ff9c05] h-3 ml-1 mr-1 rounded-lg"
      ></div>
    </div>
  );
}
