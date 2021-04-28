import React, {useEffect, useRef} from 'react';
import Chartjs from 'chart.js'
import {historyChartOptions} from "../chart-configs/chart-configs";

const DashboardChart = () => {

    const chartRefer = useRef();

    const data = [{t: "2021-04-27 15:59:00", y: "1064.76800"},
        {t: "2021-04-27 15:58:00", y: "1064.76800"},
        {t: "2021-04-27 15:57:00", y: "1060.76800"},
        {t: "2021-04-27 15:56:00", y: "1050.76800"},
        {t: "2021-04-27 15:55:00", y: "1000.76000"},
        {t: "2021-04-27 15:54:00", y: "1000.76000"},
        {t: "2021-04-27 15:53:00", y: "821.76500"},
        {t: "2021-04-27 15:52:00", y: "721.78990"},
        {t: "2021-04-27 15:51:00", y: "1121.76500"},
        {t: "2021-04-27 15:50:00", y: "219.75500"},
        {t: "2021-04-27 15:49:00", y: "221.75500"},
        {t: "2021-04-27 15:48:00", y: "121.76500"},
        {t: "2021-04-27 15:47:00", y: "321.74000"},
        {t: "2021-04-27 15:46:00", y: "621.78990"},
        {t: "2021-04-27 15:45:00", y: "720.78990"},
        {t: "2021-04-27 15:44:00", y: "721.78990"},
        {t: "2021-04-27 15:43:00", y: "722.78990"},
        {t: "2021-04-27 15:42:00", y: "723.78990"},
        {t: "2021-04-27 15:41:00", y: "722.78990"},
        {t: "2021-04-27 15:40:00", y: "721.78990"},
        {t: "2021-04-27 15:39:00", y: "521.75000"},
        {t: "2021-04-27 15:38:00", y: "421.74780"},
        {t: "2021-04-27 15:37:00", y: "211.75000"},
        {t: "2021-04-27 15:36:00", y: "219.75500"},
        {t: "2021-04-27 15:35:00", y: "219.75000"},
        {t: "2021-04-27 15:34:00", y: "219.74000"},
        {t: "2021-04-27 15:33:00", y: "241.75500"},
        {t: "2021-04-27 15:32:00", y: "211.75500"},
        {t: "2021-04-27 15:31:00", y: "1000.76000"},
        {t: "2021-04-27 15:30:00", y: "1064.76800"}];

    useEffect(() => {
        if (chartRefer && chartRefer.current && data) {
            new Chartjs(chartRefer.current, {
                type: 'line',
                data: {
                    datasets: [{
                        label: '(USD)',
                        data: data,
                        backgroundColor: "rgba(68, 190, 6, 0.75)",
                    }]
                },
                options: historyChartOptions
            });
        }
    }, []);

    return (
        <>
            {
                data &&
                <div className="stockmesiter-dashboard-chart-container bg-light rounded mt-3">
                    <div className="stockmeister-dashboard-chart-price">
                        ${1064.768}
                    </div>
                    {
                        <div className="stockmeister-dashboard-chart-percent text-success">
                            +{1.098}%
                        </div>
                    }
                    <div className="stockmeister-coin-chart-card">
                        <canvas ref={chartRefer} width={250} height={372}/>
                    </div>
                </div>
            }
        </>
    )
}

export default DashboardChart;