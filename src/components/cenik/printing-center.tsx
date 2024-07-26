import React from 'react';

const PrintingCenter: React.FC = () => {
  return (
    <div className="relative flex flex-col sm:flex-row-reverse items-center text-left w-full">
      <div className="flex flex-wrap max-w-[1500px] 4k:max-w-[3000px] mx-auto font-semibold px-6">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10 py-10">

          <div>
            <h1 className="text-4xl font-bold mb-4">
              Tiskové centrum
            </h1>

            <p className='font-thin text-gray'>
              Každý člen COMO může využít služeb tiskového centra za zvýhodněné ceny prostřednictvím své ID karty.
            </p>

            <br/>

            <p className='font-thin text-gray'>
              Pokud nebude službami tiskového centra kredit vyčerpán, je možné ho využít kdykoliv v budoucnu až do jeho vyčerpání. Pokud po vypršení členství bude na kartě evidován jakýkoliv zůstatek, je možné při vrácení karty požádat v Turistickém a informačním centru o jeho vrácení. Zůstatky jsou vraceny na účet uvedený ve smlouvě do 30 dnů od ukončení smlouvy.
            </p>

          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              Přenabíjení ID karty pro služby tiskového centra
            </h2>

            <ol className="list-decimal ml-5 mb-5">
              <p className='font-thin text-gray'><span className='font-bold'> 1. </span>
                Přiložte identifikační kartu k mincovníku.
              </p>

              <p className='font-thin my-3 text-gray'><span className='font-bold'> 2. </span>
                Tiskněte, kopírujte a skenujte dle potřeby.
              </p>

              <p className='font-thin text-gray'><span className='font-bold'> 3. </span>
                V případě potřeby je možné dobít kdykoliv opakovat.
              </p>
            </ol>

            <h2 className="text-2xl font-bold mb-3">
              Tisk e-mailem
            </h2>

            <p className='font-thin my-3 text-gray'>
              Tisk probíhá odesláním dokumentu k tisku ve standardních formátech (.pdf, .doc, .xls) emailem na adresu myq@coworking-most.cz. Pro zajištění identifikace uživatele musí být email odeslán z emailové schránky, která je uvedena ve smlouvě o nájmu pracoviště.
            </p>

            <h2 className="text-2xl font-bold mb-3">
              Pomocí USB Flashdisku
            </h2>

            <p className='font-thin my-3 text-gray'>
              Tisk probíhá načtením dat ve standardních formátech (.pdf, .doc, .xls) z flashdisku na tiskovém centru po autorizaci klienta kartou či PINem
            </p>

            <p className="font-semibold">
              DŮLEŽITÉ UPOZORNĚNÍ
            </p>

            <p className='font-thin my-3 text-gray'>
              Mincovník peníze nevrací ani nerozměňuje. Vždy vkládejte pouze hotovost, kterou chcete v tiskovém centru využít. 
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default PrintingCenter;