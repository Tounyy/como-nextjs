import React from 'react';

interface PriceItem {
  format: string;
  singleSidePrice: number;
  doubleSidePrice: number;
}

const PriceList: React.FC = () => {
  const prices: { [key: string]: PriceItem[] } = {
    blackAndWhite: [
      { format: 'A4 – Jednostranný', singleSidePrice: 0.75, doubleSidePrice: 1.50 },
      { format: 'A4 – Oboustranný', singleSidePrice: 1.50, doubleSidePrice: 3.00 },
      { format: 'A3 – Jednostranný', singleSidePrice: 1.50, doubleSidePrice: 3.00 },
      { format: 'A3 – Oboustranný', singleSidePrice: 3.00, doubleSidePrice: 6.00 }
    ],
    color: [
      { format: 'A4 – Jednostranný', singleSidePrice: 1.50, doubleSidePrice: 3.00 },
      { format: 'A4 – Oboustranný', singleSidePrice: 3.00, doubleSidePrice: 6.00 },
      { format: 'A3 – Jednostranný', singleSidePrice: 3.00, doubleSidePrice: 6.00 },
      { format: 'A3 – Oboustranný', singleSidePrice: 6.00, doubleSidePrice: 12.00 }
    ]
  };

  const renderPriceItems = (items: PriceItem[]) => (
    <div className="space-y-2">
      {items.map(item => (
        <div key={item.format} className="flex justify-between items-center py-2">
          <span className="font-medium">{item.format}</span>
          <div className="flex space-x-4">
            <span className="font-semibold">{item.singleSidePrice.toFixed(2)} Kč</span>
            <span className="font-semibold">{item.doubleSidePrice.toFixed(2)} Kč</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="items-center text-left w-full mb-20">
      <div className="max-w-[1500px] 4k:max-w-[3000px] mx-auto font-semibold">
        <div className="max-w-full mx-auto">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10 p-6">
            <div className="bg-white shadow-xl border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-center mb-4">Černobílý</h2>
              {renderPriceItems(prices.blackAndWhite)}
            </div>
            
            <div className="bg-white shadow-xl border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-center mb-4">Barevný</h2>
              {renderPriceItems(prices.color)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
