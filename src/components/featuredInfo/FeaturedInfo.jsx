import React from 'react'
import './FeaturedInfo.css'

import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuedMoney">Rs. 25,000</span>
                    <span className="featuredMoneyRate">
                        -1000
                        <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to  last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuedMoney">Rs. 45,000</span>
                    <span className="featuredMoneyRate">
                        -1000
                        <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to  last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuedMoney">Rs. 25,000</span>
                    <span className="featuredMoneyRate">
                        2000
                        <ArrowUpward />
                    </span>
                </div>
                <span className="featuredSub">Compared to  last Month</span>
            </div>
        </div>
    )
}
