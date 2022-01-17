import React from 'react'
import './Chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function Chart() {

    const data = [
        {
          name: 'Jan',
          "Active User": 4000,
        },
        {
          name: 'Feb',
          "Active User": 3000,
        },
        {
          name: 'Mar',
          "Active User": 2000,
        },
        {
          name: 'April',
          "Active User": 2780,
        },
        {
          name: 'May',
          "Active User": 1890,
        },
        {
          name: 'Jun',
          "Active User": 2390,
        },
        {
          name: 'Jul',
          "Active User": 3490,
        },
        {
            name: 'Aug',
            "Active User": 3490,
          },
          {
            name: 'Sep',
            "Active User": 3490,
          },
          {
            name: 'Oct',
            "Active User": 3490,
          },
          {
            name: 'Nov',
            "Active User": 3490,
          },
          {
            name: 'Dec',
            "Active User": 3490,
          },
      ];

    return (
        <div className="chart">
            <h3 className="chartTitle">Sales Analytics</h3>
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
          <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5" />
          <Legend />
          <Line type="monotone" dataKey="Active User" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
        </div>
    )
}
