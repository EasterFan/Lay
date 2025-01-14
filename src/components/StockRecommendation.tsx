interface StockProps {
  stock: {
    code: string;
    name: string;
  }
}

export default function StockRecommendation({ stock }: StockProps) {
  return (
    <div className="text-left">
      <div className="inline-block relative">
        {/* Hand-drawn style box with rounded corners */}
        <div className="absolute inset-0 border-2 border-gray-600 rounded-lg transform rotate-[0.5deg]"></div>
        <div className="absolute inset-0 border-2 border-gray-600 rounded-lg transform -rotate-[0.3deg]"></div>
        
        {/* Content */}
        <div className="relative border-2 border-gray-600 rounded-lg p-4 bg-white/90">
          <h2 className="text-2xl font-bold mb-2 border-b-2 border-gray-600 pb-2">MACD 股票推送</h2>
          <p className="text-xl">{stock.code}</p>
          <p className="text-lg">{stock.name}</p>
        </div>
      </div>
    </div>
  )
}

