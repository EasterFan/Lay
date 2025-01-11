interface StockData {
  stockName: string;
  stockCode: string;
}

interface StrategyData {
  strategyType: string;
  title: string;
  end: string;
  stockList: StockData[];
}

interface DailyData {
  date: string;
  strategyList: StrategyData[];
}

interface BackendData {
  tokenId: string;
  data: DailyData[];
}

export async function fetchStockData() {
  // In a real application, this would be an API call to your backend
  // For this example, we'll return mock data for the last 7 days

  //call api https://lay-chgfwjupcv.cn-hangzhou.fcapp.run/lay/macd?tokenId&strategyType=strategy_macd_low_meet
  const response = await fetch('https://lay-chgfwjupcv.cn-hangzhou.fcapp.run/lay/macd?tokenId&strategyType=strategy_macd_low_meet')
  const data = await response.json()
  const stockList: { code: string; name: string }[] = [];

  data.data.forEach((dailyData: DailyData) => {
    dailyData.strategyList.forEach((strategyData) => {
      strategyData.stockList.forEach((stockData) => {
        stockList.push({ code: stockData.stockCode, name: stockData.stockName });
      });
    });
  });

  console.log('stockList', stockList)
  return stockList;
}

