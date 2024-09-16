export const ProjectLinkSkeleton = () => {
  return (
    <div className="p-4 w-auto hover:underline  animate-pulse ">
      <div className="relative flex flex-row gap-1 justify-start items-baseline  h-[18px]">
        <h2 className="text-sm bg-gray-600 rounded-full w-[82px] h-[20px] mr-1 tracking-[0.4rem]"></h2>
        <h2 className="text-lg bg-gray-400 w-28 rounded-full  h-[28px] mr-1 font-light tracking-[0.2rem]"></h2>
        <p className="text-sm 0 rounded-full w-16 h-[20px] bg-gray-600 tracking-[0.2rem]"></p>
      </div>
    </div>
  );
};
