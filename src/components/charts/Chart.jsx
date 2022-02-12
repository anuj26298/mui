import React from 'react'
import './Chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function Chart(props) {
    const {title, data, dataKey, grid} = props;

    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" height="100%" aspect={4/1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
            <XAxis dataKey="name"/>
          <Tooltip />
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5" />}
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
        </div>
    )
}
