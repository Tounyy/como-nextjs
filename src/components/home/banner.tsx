const Banner = () => {
  return (
    <div className="relative flex flex-col sm:flex-row-reverse items-center text-left w-full">
      <div className="flex flex-wrap justify-center items-center max-w-[1500px] 4k:max-w-[3000px] mx-auto font-semibold px-6">

        <div className="flex flex-wrap justify-center items-center text-lg lg:text-xl xl:text-2xl 2k:text-4xl 4k:text-6xl">
          <div className="px-4" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
            PODNIKATELSKÉ KONZULTACE
          </div>
          <div className="border-r border-[#008DD2] border-r-2 h-9 mx-3 4k:mx-4"></div>

          <div className="px-4" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
            PRACOVNÍ PROSTORY
          </div>
          <div className="border-r border-[#008DD2] border-r-2 h-9 mx-3 4k:mx-4"></div>

          <div className="px-4" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
            SKVĚLÁ KOMUNITA
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center text-lg lg:text-xl xl:text-2xl 2k:text-4xl 4k:text-6xl">
          <div className="px-4" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
            MARKETINGOVÉ WORKSHOPY
          </div>
          <div className="border-r border-[#008DD2] border-r-2 h-9 mx-3"></div>

          <div className="px-4" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
            TECHNOLOGICKÉ VZDĚLÁVÁNÍ
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;