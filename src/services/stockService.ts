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

  //call api https://lay-chgfwjupcv.cn-hangzhou.fcapp.run/lay/macd?tokenId&strategyType=strategy_macd_low_meet
  const response = await fetch('https://lay-chgfwjupcv.cn-hangzhou.fcapp.run/lay/macd?tokenId&strategyType=strategy_macd_low_meet')
  const data = await response.json()

  const dailyData: Array<{ date: string; strategyList: Array<{ title: string; stockList: Array<{ code: string; name: string }> }> }> = data.data.map((dailyData: DailyData) => ({
    date: dailyData.date,
    strategyList: dailyData.strategyList.map((strategyData) => ({
      title: strategyData.title,
      end: strategyData.end,
      stockList: strategyData.stockList.map((stockData) => ({
        code: stockData.stockCode,
        name: stockData.stockName
      }))
    }))
  }));

  console.log('dailyData', dailyData)
  return dailyData;
}

