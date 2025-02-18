import { useState, useEffect } from 'react'
import StockRecommendation from '../components/StockRecommendation'
import { fetchStockData } from '../services/stockService'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function HomePage() {
  const [dailyData, setDailyData] = useState<Array<{ date: string; strategyList: Array<{ title: string; stockList: Array<{ code: string; name: string }> }> }>>([])
  const [currentDay, setCurrentDay] = useState(0)

  useEffect(() => {
    fetchStockData().then(data => {
      setDailyData(data)
      console.log('currentDay', currentDay) // 在这里打印 dailyData 变量的值
      console.log('dailyData', data[0]) // 在这里打印 dailyData 变量的值
    })
  }, [])


 const handlePrevDay = () => {
    setCurrentDay(prev => Math.min(prev + 1, dailyData.length - 1))
  }

const handleNextDay = () => {
    setCurrentDay(prev => Math.max(prev - 1, 0))
  }


  return (
    <div
      className="h-full w-full flex items-center justify-center relative bg-white"
      style={{
        backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg3-EuVOlkhWh4gxSnfOnBzim1C3eNJTOz.jpeg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
      }}
    >
      <div className="absolute top-8 left-8">
        {dailyData.length > 0 && dailyData[currentDay].strategyList.map((strategy, index) => (
          <StockRecommendation 
            key={index} 
            strategy={{ 
              ...strategy, 
              date: dailyData[currentDay].date
            }} 
          />
        ))}
      </div>
      <button
        onClick={handlePrevDay}
        disabled={currentDay === dailyData.length - 1}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-2 py-20 bg-black/10 hover:bg-black/20 text-black rounded-r transition-opacity duration-300 opacity-0 hover:opacity-100"
        aria-label="Previous Day"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={handleNextDay}
        disabled={currentDay === 0}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2 py-20 bg-black/10 hover:bg-black/20 text-black rounded-l transition-opacity duration-300 opacity-0 hover:opacity-100"
        aria-label="Next Day"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  )
}