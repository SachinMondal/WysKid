export default function ContainerBig({ children }) {
  return (
    <div className="w-full h-full ">
      {/* <div className="absolute top-0 left-0 w-1/4 h-full bg-black"></div> */}
      <div className="flex items-center justify-center absolute top-0 left-1/4  w-3/4 h-full ">
        {children}
      </div>
    </div>
  );
}
