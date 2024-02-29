import React from "react";

const Window = ({ data, handleWindow }) => {
  return (
    <div className="relative flex items-center justify-start flex-col p-3  rounded-xl lg:rounded-3xl bg-primary w-3/4 h-5/6">
      <button
        onClick={() =>
          handleWindow({
            ...data,
            open: true,
          })
        }
        id="close"
        className="absolute top-[-0.75rem] right-[-0.75rem] z-10 bg-red-600 w-8 h-8 rounded-full "
      >
        X
      </button>
      <p className="max-h-[20%] lg:max-h-[25%]  pt-2 pb-2 text-sm/[1.3rem] lg:text-xl/6 font-normal overflow-auto">
        What is my name Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eos sapiente dolorum molestiae voluptates numquam quae officia? Fugit ab
        corporis dolore! Laborum odio ipsa obcaecati veritatis! Ab sequi
      </p>
      <div className="flex items-center justify-center p-3 rounded-lg h-[7%] bg-[#94aa3c]">
        <p>correct Answer: Aditya</p>
      </div>

      <div
        id="points"
        className="h-[15%] text-center flex items-center justify-center"
      >
        <p>+15/25</p>
      </div>
      <div
        id="more"
        className="flex items-start justify-start w-full h-3/5 bg-[#94aa3c] p-3 overflow-auto rounded-lg"
      >
        <p className=" m-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ex
          ipsa maiores provident eum earum aliquid facere, unde, esse quisquam
          consequuntur minima pariatur reiciendis. Quia eaque dolorem culpa
          suscipit cum praesentium ipsum veniam voluptas quas dolore quidem
          delectus cupiditate odit autem aliquam distinctio assumenda,
          consequuntur natus a molestias eum! Nostrum officia provident
          laboriosam illum, unde nesciunt distinctio earum placeat est
          voluptatibus ipsa labore totam tempora hic saepe, modi molestiae
          fugiat quia. Tempore laboriosam, earum repellendus commodi ipsam
          pariatur porro cumque consequuntur, inventore asperiores ad nisi
          voluptatum. Repellendus quisquam vero ut modi hic. Libero rem
          exercitationem sequi, perspiciatis accusantium vel vero?
        </p>
      </div>
    </div>
  );
};

export default Window;
