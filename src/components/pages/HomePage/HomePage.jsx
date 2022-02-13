import React from 'react'
import Chart from '../../charts/Chart.jsx'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo.jsx'
import { userData } from '../../../mockData/dummyData.js'
import './HomePage.css'
import WidgetSmall from '../../widgetSmall/WidgetSmall.jsx'
import WidgetLarge from '../../widgetLarge/WidgetLarge.jsx'

export default function HomePage() {
    return (
        <div className="homepage"> 
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className='homeWidgets'>
                <WidgetSmall/>
                <WidgetLarge/>
                </div> 
        </div>
    )
}
