import React from "react"


function Button() {
    return (
        <div className="flex gap-4 justify-center">
            {/* learn button */}
            <button className="mt-3 bg-blue-600 text-white px-7 py-3 rounded-full font-medium text-m hover:bg-blue-700 transition duration-300">Learn more</button>

            {/* buy button */}
            <button className="mt-3 text-blue-600 border border-blue-600 px-6 py-2 rounded-full font-thin text-xl hover:bg-blue-600 hover:text-white transition duration-300">Buy</button>
        </div>
    )
}


export default Button
