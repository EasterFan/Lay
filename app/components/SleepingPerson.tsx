export default function SleepingPerson() {
  return (
    <div className="absolute bottom-10 right-10 w-64">
      {/* Bed Frame */}
      <div className="relative">
        {/* Headboard */}
        <div className="absolute -top-8 right-0 w-full h-12 border-2 border-black rounded-t-lg">
          <div className="absolute top-2 left-4 w-3 h-3 rounded-full border-2 border-black"></div>
          <div className="absolute top-2 right-4 w-3 h-3 rounded-full border-2 border-black"></div>
        </div>
        
        {/* Bed Base */}
        <div className="relative w-full h-24 border-2 border-black rounded-lg">
          {/* Mattress */}
          <div className="absolute top-0 left-0 w-full h-full bg-white rounded-lg">
            {/* Person and Covers */}
            <div className="absolute top-2 left-4 right-4 bottom-2">
              {/* Pillow */}
              <div className="absolute top-0 right-2 w-16 h-6 bg-white border border-black rounded"></div>
              
              {/* Covers */}
              <div className="absolute top-4 left-0 right-0 h-12 bg-white border border-black rounded-lg">
                {/* Person's head */}
                <div className="absolute -top-2 right-6 w-8 h-8 rounded-full border border-black bg-white">
                  {/* Hair */}
                  <div className="absolute top-0 right-1 w-4 h-2 bg-white border-t border-r border-black rounded-tr-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bed Legs */}
          <div className="absolute -bottom-4 left-2 w-2 h-4 border-2 border-black bg-white"></div>
          <div className="absolute -bottom-4 right-2 w-2 h-4 border-2 border-black bg-white"></div>
        </div>
      </div>
    </div>
  )
}

