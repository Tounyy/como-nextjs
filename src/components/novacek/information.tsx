"use client";

import React from 'react';

const ReservationForm = () => {
  return (
    <div className="max-w-[1500px] 4k:max-w-[3000px] p-6 mx-auto">

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-16">
        <h1 className="text-3xl font-bold text-gray-900 text-left mb-6 lg:mb-0">REZERVACE TERMÍNU</h1>
        <div>
          <p className="mb-4">
            Proveďte rezervaci pracovního místa ve Vámi požadovaném datu a čase na 
            <a href="http://www.coworking-most.cz/rezervace-misto" className="text-blue-600 hover:underline"> www.coworking-most.cz/rezervace-misto </a>
            nebo na <a href="http://www.coworking-most.cz/rezervace-zasedacka" className="text-blue-600 hover:underline"> www.coworking-most.cz/rezervace-zasedacka </a>
            v případě rezervace zasedací místnosti. Výčetka na potvrzení rezervace do Vašeho emailu. Rezervace zasedací místnosti je nutné provádět nejméně 24 hodin před plánovaným využitím prostoru. Pro KAŽDÉ využití coworkingového pracoviště či zasedací místnosti ze strany uživatelů všech tarifů musí být vždy provedena rezervace. To platí i pro uživatele s již vydanými ID kartami.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-16">
        <h1 className="text-3xl font-bold text-gray-900 text-left mb-6 lg:mb-0">UZAVŘENÍ SMLOUVY</h1>
        <div>
          <p className="mb-4">
            V případě jednodenních či hodinových tarifů přijďte před první návštěvou coworkingového pracoviště do Turistického a informačního centra (budova Magistrátu města Mostu, vchod ze strany tř. Budovatelů). Zde s Vámi bude uzavřena smlouva o nájmu coworkingového pracoviště dle Vámi zvoleného tarifu, předána ID karta sloužící pro vstup a výstup z coworkingového pracoviště a pro identifikaci klienta při využití služeb tiskového centra. Za ID kartu je vybírána hotovostní vratná záloha ve výši 100 Kč. Po ukončení smlouvy nám nepoškozenou kartu můžete vrátit, nebo si ji můžete ponechat pro případné využití v budoucnosti. 
          </p>
          <p className="mb-4">
            V případě měsíčních tarifů či pronájmu zasedací místnosti po provedené rezervaci vyčkejte na kontakt ze strany pracovníka odboru rozvoje a dotací, který Vás provede dalším postupem.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-16">
        <h1 className="text-3xl font-bold text-gray-900 text-left mb-6 lg:mb-0">NABITÍ ID KARTY PRO VYUŽITÍ TISKOVÝCH SLUŽEB</h1>
        <div>
          <p className="mb-4">
            V případě Vašeho zájmu o služby tiskového centra Vám pracovníci Turistického a informačního centra či pracovníci odboru rozvoje a dotací převedou kredit ve Vámi zvolené výši. ID Kartu je možné také dobít kdykoliv přímo v coworkingovém pracovišti prostřednictvím umístěného automatu. Nevyužitý kredit Vám bude automaticky vrácen po ukončení smlouvy na Váš bankovní účet uvedený ve smlouvě do 1 měsíce. <br/> POZOR: automat finanční hotovost nevrací a nerozměňuje.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-16">
        <h1 className="text-3xl font-bold text-gray-900 text-left mb-6 lg:mb-0">VSTUP DO PRACOVIŠTĚ</h1>
        <div>
          <p className="mb-4">
            Pro vstup do coworkingového pracoviště přiložte svou ID kartu k venkovnímu snímacímu panelu na dveřích. Povolený přístup je signalizován rozsvícením zeleného světla na panelu a delším pípnutím. Naopak zakázaný vstup je identifikován rozsvícením červeného světla na panelu a trojitým krátkým pípnutím. Pokud Vám není umožněn vstup do prostoru coworkingového pracoviště, kontaktujte pracovníka Turistického informačního centra či pracovníka odboru rozvoje a dotací (kontakt uveden na smlouvě).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-16">
        <h1 className="text-3xl font-bold text-gray-900 text-left mb-6 lg:mb-0">OPUŠTĚNÍ PRACOVIŠTĚ</h1>
        <div>
          <p className="mb-4">
            Pro opuštění coworkingového pracoviště opět přiložte svou ID kartu ke snímacímu panelu na dveřích. Otevření dveří je opět signalizováno rozsvícením zeleného světla na panelu a delším pípnutím. Pokud Vám není umožněn odchod z coworkingového pracoviště, kontaktujte pracovníka Turistického informačního centra Most či pracovníka odboru rozvoje a dotací (kontakt uveden na smlouvě).
          </p>
          <p className="mb-4">
            Pro uživatele měsíčních tarifů: V případě, že opouštíte coworkingové pracoviště v době mezi 19:00 a 07:00 je nezbytné o odchodu informovat službu konajícího strážní městské policie v budově Magistrátu města Mostu (tel. 476 448 215) 
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-16">
        <h1 className="text-3xl font-bold text-gray-900 text-left mb-6 lg:mb-0">VYUŽITÍ WIFI SÍTĚ</h1>
        <div>
          <p className="mb-4">
            Každý uživatel po uzavření smlouvy o nájmu obdrží jednorázově přístupové údaje pro připojení k WIFI síti. Heslo k síti WIFI je pravidelně, jednou týdně, měněno a aktuální platné heslo Vám bude zasláno vždy prostřednictvím SMS na Váš mobilní telefon. 
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-16">
        <h1 className="text-3xl font-bold text-gray-900 text-left mb-6 lg:mb-0">VYUŽITÍ SLUŽEB TISKOVÉHO CENTRA</h1>
        <div>
          <p className="mb-4">
            Služeb tiskového centra může využít každý uživatel prostřednictvím své ID karty. Služby tiskového centra jsou zpoplatněné a detailní informace o cenách tisku a kopírování naleznete na www.coworking-most.cz/tiskove-centrum.
          </p>
          <p className="mb-4">
            Propojení Vašeho zařízení s tiskovým centrem je možné realizovat třemi způsoby:
          </p>

              <ol className="list-decimal mb-5 ml-5">
              <li className='mb-2'>1. Bez jakékoliv instalace - Tisk probíhá odesláním dokumentu k tisku ve standardních formátech (.pdf, .doc, .xls) emailem.</li>
              <li className='mb-2'>2. Přímý tisk - Instalační balíček COMO - Spuštěním instalačního balíčku, který zajišťuje přístup k tiskovému centru a identifikaci uživatele.</li>
              <li className='mb-2'>3. Přímý tisk - Ruční instalace a nastavení - Instalace ovladačů pro tisk ze serveru výrobce tiskárny.</li>
            </ol>

          <p className="mb-4">
            Pro zahájení samotného tisku je potřeba provést autorizaci uživatele přímo na tiskárně přiložením ID karty ke čtecímu modulu tiskárny, či zadáním PINU na dotykové klávesnici tiskárny. PIN vždy udržujte v tajnosti a nikdy ho nikomu nesdělujte.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-16">
        <h1 className="text-3xl font-bold text-gray-900 text-left mb-6 lg:mb-0">Důležité kontaktní osoby</h1>
        <div>
          <h1 className='font-bold'>UZAVÍRÁNÍ KRÁTKODOBÝCH SMLUV (DENNÍ A HODINOVÉ TARIFY)</h1>
          <br/>
          <p className="mb-4">
            Pracovníci Turistického informačního centra – tel. 774 105 214, email: infocentrum@mesto-most.cz. (po-pá: 9:00 – 17:00)
          </p>
          <h1 className='font-bold'>UZAVÍRÁNÍ DLOUHODOBÝCH SMLUV A PRONÁJEM ZASEDACÍ MÍSTNOSTI (MĚSÍČNÍ TARIFY A ZASEDACÍ MÍSTNOST), PROVOZNĚ-TECHNICKÉ ZÁLEŽITOSTI, HLÁŠENÍ ŠKOD ČI PORUŠOVÁNÍ PROVOZNÍ ŘÁDU</h1>
          <br/>
          <p className="mb-4">
            Pracovníci odboru rozvoje a dotací – tel. 734 393 753, email: info@coworking-most.cz. (po-pá: 8:00 – 16:00, jinak pouze po předchozí domluvě)
          </p>
          <h1 className='font-bold'>ZPŘÍSTUPNĚNÍ / UZAMČENÍ COWORKINGOVÉHO PRACOVIŠTĚ MIMO PROVOZNÍ DOBU OD 19:00 DO 07:00 (POUZE PRO UŽITAVELE MĚSÍČNÍCH TARIFŮ)</h1>
          <br/>
          <p className="mb-4">
            Službu konající strážník Městské policie Most v budově Magistrátu města Mostu poskytne, v případě uzamčených vstupních dveří z tř. Budovatelů, klíč. Pro vstup do coworkingového pracoviště pak uživatel použije svou přístupovou ID kartu.
          </p>
        </div>
      </div>

    </div>
  );
}

export default ReservationForm;