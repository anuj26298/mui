import React from 'react'
import Chart from '../../charts/Chart.jsx'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo.jsx'
import './HomePage.css'

export default function HomePage() {
    return (
        <div className="homepage"> 
            <FeaturedInfo />
            <Chart /> 
        </div>
    )
}
