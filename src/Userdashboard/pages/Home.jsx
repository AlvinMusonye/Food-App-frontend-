import React from 'react'
import Header from '../header/Header'
import Food from '../header/Food'

function Home() {
    return (
        <div className="px-4">

            <Header />
            <h2 className="text-4xl animate-bounce text-center font-bold mt-10">
                Order from the <span className="text-orange-500">Best</span>, get it Delivered by the <span className="text-orange-500">Best</span>! 🚀
            </h2>
            <Food />
        </div>
    )
}

export default Home