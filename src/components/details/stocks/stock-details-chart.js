import React, {useEffect, useRef} from 'react';
import Chartjs from 'chart.js'
import {historyChartOptions} from "../../chart-configs/chart-configs";
import {useParams} from "react-router";

const StockHistoryChart = ({data}) => {

    const {id} = useParams();

    const chartRef = useRef();

    useEffect(() => {
        if(chartRef && chartRef.current && data.details) {
            new Chartjs(chartRef.current, {
                type: 'line',
                data: {
                    datasets: [{
                        label: id.toUpperCase() + ' (USD)',
                        data: data.day,
                        backgroundColor: "rgba(68, 190, 6, 0.75)",
                    }]
                },
                options: historyChartOptions
            });
        }
    },[]);

    return (
        <>
            {
                data &&
                <div className="stockmesiter-coin-chart-container bg-light rounded mt-3">
                    <div className="stockmeister-coin-chart-price">
                        ${data.details.open}
                    </div>
                    {
                        data.details.percent_change >= 0 &&
                        <div className="stockmeister-coin-chart-percent text-success">
                            +{data.details.percent_change}% (24Hrs)
                        </div>
                    }
                    {
                        data.details.percent_change <= 0 &&
                        <div className="stockmeister-coin-chart-percent text-danger">
                            {data.details.percent_change}% (24Hrs)
                        </div>
                    }
                    <div className="stockmeister-coin-chart-card">
                        <canvas ref={chartRef} className="stockmeister-crypto-history-chart" width={250} height={372}/>
                    </div>
                </div>
            }
            {
                !data &&
                <div className="text-sm-center small">
                    Loading chart...
                </div>
            }
        </>
    )
}

export default StockHistoryChart;