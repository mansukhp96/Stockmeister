import React, {useEffect, useRef} from 'react';
import Chartjs from 'chart.js'
import {historyChartOptions} from "../chart-configs/chart-configs";
import {useParams} from "react-router";

const HistoryChart = () => {

    const {symbol} = useParams()

    const chartRef = useRef();

    useEffect(() => {
        console.log(symbol)
        if(chartRef && chartRef.current) {
            const chartInstance = new Chartjs(chartRef.current, {
                type: 'line',
                data: {
                    datasets: [{
                    label: symbol.toUpperCase() + ' (USD)',
                    data: [
                        {x: 1, y: 65},
                        {x: 2, y:6},
                        {x: 3, y: 71},
                        {x: 4, y: 40}],
                    backgroundColor: "rgba(120, 950, 94, 0.6)",
                    borderColor: "rgba(174, 305, 194, 0.4)",
                    pointRadius: 0,
                    borderWidth: 2
                }]
            },
            options: historyChartOptions
        });
        }
    },[]);

    return (
        <div className="bg-light rounded border mt-5 p-4">
            <div></div>
            <div>
                <canvas ref={chartRef} id="stockmeister-crypto-history-chart" width={250} height={250}/>
            </div>
        </div>
    )
}

export default HistoryChart;