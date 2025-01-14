'use client'

import { useState, useEffect } from 'react'
import StockRecommendation from './components/StockRecommendation'
import { fetchStockData } from './services/stockService'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function NewTabPage() {
  const [stockData, setStockData] = useState<Array<{ code: string; name: string }>>([])
  const [currentDay, setCurrentDay] = useState(0)

  console.log('im here 111111......')
  useEffect(() => {
    console.log('im here......')
    fetchStockData().then(data => setStockData(data))
  }, [])

  const handlePrevDay = () => {
    setCurrentDay(prev => Math.max(prev - 1, 0))
  }

  const handleNextDay = () => {
    setCurrentDay(prev => Math.min(prev + 1, 6))
  }

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center relative bg-white"
      style={{
        backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg3-EuVOlkhWh4gxSnfOnBzim1C3eNJTOz.jpeg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
      }}
    >
      <div className="absolute top-8 left-8">
        {stockData.length > 0 && (
          <StockRecommendation stock={stockData[currentDay]} />
        )}
      </div>
      <button 
        onClick={handlePrevDay} 
        disabled={currentDay === 0}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-2 py-20 bg-black/10 hover:bg-black/20 text-black rounded-r transition-opacity duration-300 opacity-0 hover:opacity-100"
        aria-label="Previous Day"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button 
        onClick={handleNextDay} 
        disabled={currentDay === 6}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2 py-20 bg-black/10 hover:bg-black/20 text-black rounded-l transition-opacity duration-300 opacity-0 hover:opacity-100"
        aria-label="Next Day"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  )
}

