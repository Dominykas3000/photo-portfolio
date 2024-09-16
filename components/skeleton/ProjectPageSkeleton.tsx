export const ProjectPageSkeleton = () => {
  return (
    <section className="w-full">
      <article className="flex gap-4 justify-center items-center flex-col mt-4 mb-8">
        
        <div className="flex-col gap-2  hover:underline  animate-pulse  w-full max-w-[267px] h-[36px]">
          <div className="relative flex flex-row gap-1 justify-start items-baseline  w-full h-full max-w-[636px] max-h-[60px]">
            <h2 className="text-sm bg-gray-400 rounded-full w-full h-full max-w-[636px] max-h-[60px] mr-1 tracking-[0.4rem]"></h2>
          </div>
        </div>

        <div className="flex-col gap-2  hover:underline  animate-pulse  w-full max-w-[46px] h-[20px]">
          <div className="relative flex flex-row gap-1 justify-start items-baseline  w-full h-full max-w-[636px] max-h-[60px]">
            <h2 className="text-sm bg-gray-600 rounded-full w-full h-full max-w-[636px] max-h-[60px] mr-1 tracking-[0.4rem]"></h2>
          </div>
        </div>
      </article>

      <div className="flex justify-center `w-full">
        {/* <ImageSlider images={project.attributes.project_images.data} /> */}
        <div
          role="status"
          className="max-w-screen-md p-4  shadow animate-pulse w-full border-gray-400"
        >
          <div className="flex items-center w-full justify-center h-80 mb-4 bg-gray-600 rounded ">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
        </div>
      </div>

      <article className=" flex items-center justify-center mb-20 w-full ">
        <div className="p-4  hover:underline  animate-pulse  w-full max-w-[636px] h-[56px]">
          <div className="relative flex flex-row gap-1 justify-start items-baseline  w-full h-full max-w-[636px] max-h-[60px]">
            <h2 className="text-sm bg-gray-400 rounded-full w-full h-full max-w-[636px] max-h-[60px] mr-1 tracking-[0.4rem]"></h2>
          </div>
        </div>
      </article>
    </section>
  );
};
