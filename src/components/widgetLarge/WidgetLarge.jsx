import React from 'react'
import './WidgetLarge.css'
export default function WidgetLarge() {

  const Button =({type}) => {
    return (
      <button className={`widgetLargeButton ${type}`}>
        {type}
      </button>
    )
  }
  return (
    <div className='widgetLarge'>
        <span className="widgetLargeTitle">Latest Transactions</span>
        <table className="widgetLargeTable">
          <tr className="widgetLargeTr">
            <th className="widgetLargeTh">Customer</th>
            <th className="widgetLargeTh">Data</th>
            <th className="widgetLargeTh">Amount</th>
            <th className="widgetLargeTh">Status</th>
          </tr>
          <tr className="widgetLargeTr">
            <td className="widgetLargeUser">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGWm7kgMH1PEsycRwkyqPcPB1b2NITpD8j2g&usqp=CAU" alt="" className="widgetLargeImg" />
              <span className="widgetLargeName">Anuj Kumar</span>
            </td>
            <td className="widgetLargeData">2 Feb 2022</td>
            <td className="widgetLargeAmount">Rs. 10000</td>
            <td className="widgetLargeStatus">
              <Button type="Approved"/>
              </td>
          </tr>
          <tr className="widgetLargeTr">
            <td className="widgetLargeUser">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGWm7kgMH1PEsycRwkyqPcPB1b2NITpD8j2g&usqp=CAU" alt="" className="widgetLargeImg" />
              <span className="widgetLargeName">Anuj Kumar</span>
            </td>
            <td className="widgetLargeData">2 Feb 2022</td>
            <td className="widgetLargeAmount">Rs. 10000</td>
            <td className="widgetLargeStatus">
              <Button type="Declined"/>
              </td>
          </tr>
          <tr className="widgetLargeTr">
            <td className="widgetLargeUser">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGWm7kgMH1PEsycRwkyqPcPB1b2NITpD8j2g&usqp=CAU" alt="" className="widgetLargeImg" />
              <span className="widgetLargeName">Anuj Kumar</span>
            </td>
            <td className="widgetLargeData">2 Feb 2022</td>
            <td className="widgetLargeAmount">Rs. 10000</td>
            <td className="widgetLargeStatus">
              <Button type="Pending"/>
              </td>
          </tr>
          <tr className="widgetLargeTr">
            <td className="widgetLargeUser">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGWm7kgMH1PEsycRwkyqPcPB1b2NITpD8j2g&usqp=CAU" alt="" className="widgetLargeImg" />
              <span className="widgetLargeName">Anuj Kumar</span>
            </td>
            <td className="widgetLargeData">2 Feb 2022</td>
            <td className="widgetLargeAmount">Rs. 10000</td>
            <td className="widgetLargeStatus">
              <Button type="Approved"/>
              </td>
          </tr>
        </table>
    </div>
  )
}
