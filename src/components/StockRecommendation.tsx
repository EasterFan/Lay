interface Strategy {
  title: string;
  stockList: { code: string; name: string }[];
  end: string;
  date: string;
}

interface StockRecommendationProps {
  strategy: Strategy;
}

const StockRecommendation: React.FC<StockRecommendationProps> = ({ strategy }) => {
  return (
    <div className="text-left mb-4">
      <div className="inline-block relative">
        {/* Hand-drawn style box with rounded corners */}
        <div className="absolute inset-0 border-2 border-gray-600 rounded-lg transform rotate-[0.5deg]"></div>
        <div className="absolute inset-0 border-2 border-gray-600 rounded-lg transform -rotate-[0.3deg]"></div>
        
        {/* Content */}
        <div className="relative border-2 border-gray-600 rounded-lg p-4 bg-white/90">
          <h2 className="text-2xl font-bold mb-2 border-b-2 border-gray-600 pb-2">
            {strategy.title} - {strategy.date}，共 {strategy.stockList.length} 支
          </h2>
          {strategy.stockList.length > 0 ? (
            <>
              {strategy.stockList.map((stock, index) => (
                <p key={index} className="text-lg">{stock.code} {stock.name}</p>
              ))}
              <p className="text-lg">&nbsp;</p>
              <p className="text-lg">{strategy.end}</p>
            </>
          ) : (
            <p className="text-lg">暂无股票信息</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default StockRecommendation;

