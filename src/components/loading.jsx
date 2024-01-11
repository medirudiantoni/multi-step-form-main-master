import React from 'react'

const Loading = () => {
  return (
    <div className="fixed md:absolute z-50 top-0 left-0 w-full h-full bg-white/50 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-blue-200 relative overflow-hidden">
          <div className="h-full w-full absolute left-0 top-0 animate-spin-slow">
            <div className="w-1/2 h-full bg-blue-600"></div>
          </div>
          <div className="absolute z-50 w-3/4 h-3/4 bg-white rounded-full"></div>
        </div>
      </div>
  )
}

export default Loading