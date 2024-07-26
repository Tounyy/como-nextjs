const event1 = '../img/home/event/2011n.png';
const event2 = '../img/home/event/2013mm.png';

const Event = () => {

  return (
    <section className="relative flex flex-col sm:flex-row-reverse items-center text-left w-full">
      <div className="relative flex-col md:flex-row max-w-[1500px] 4k:max-w-[3000px] mx-auto my-8 p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Eventy</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            
          <div>
            <h1 className="text-center mb-6 text-[#808080] font-bold text-2xl">Právě proběhlo</h1>
            <img src={event1} alt="Monitory na vybraných stolech" className='rounded-lg border border-300'/>
          </div>

          <div>
            <h1 className="text-center mb-6 text-[#808080] font-bold text-2xl">Další akce</h1>
            <img src={event2} alt="Monitory na vybraných stolech" className='rounded-lg border border-300'/>
          </div>

        </div>

        <div className="flex justify-center items-center">
          <button 
            className="bg-[#008DD2] font-bold text-white rounded-lg mt-6 px-8 py-3 text-sm transition-colors duration-500 hover:bg-[#2d547d] focus:bg-[#2d547d]"
          >
            Více zde
          </button>
        </div>

      </div>
    </section>
  );
};

export default Event;