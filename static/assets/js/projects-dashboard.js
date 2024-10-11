setTimeout(() => {

    /* Project Overview */
    var options = {
        chart: {
            height: 358,
            toolbar: {
                show: false
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 5,
                left: 0,
                blur: 3,
                color: ["rgba(255,255,255,0)", 'var(--primary02)', "var(--primary005)"],
                opacity: 0.5
            },
        },
        plotOptions: {
            bar: {
                columnWidth: "40%",
            },
        },
        grid: {
            show: true,
            borderColor: 'rgba(119, 119, 142, 0.1)',
            strokeDashArray: 4,
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [0, 2, 2],
            curve: "smooth",
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'center',
            fontWeight: 600,
            fontSize: '11px',
            tooltipHoverFormatter: function (val, opts) {
                return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            },
            labels: {
                colors: '#74767c',
            },
            markers: {
                width: 8,
                height: 8,
                strokeWidth: 0,
                radius: 12,
                offsetX: 0,
                offsetY: 0
            },
        },
        series: [{
            name: "Active Projects",
            data: [66, 85, 50, 105, 65, 74, 70, 105, 100, 125, 85, 110, 85, 58, 112],
            type: 'bar',
        }, {
            name: 'Completed Projects',
            data: [65, 20, 40, 55, 80, 90, 59, 86, 120, 165, 115, 120, 50, 70, 85],
            type: 'line',
        }, {
            name: "Project Revenue",
            data: [20, 65, 85, 38, 55, 25, 25, 165, 75, 64, 70, 75, 85, 85, 115],
            type: 'line',
        }],
        colors: ["rgba(255,255,255,0.05)", "var(--primary-color)", "var(--primary05)",],
        yaxis: {
            title: {
                style: {
                    color: '#adb5be',
                    fontSize: '14px',
                    fontFamily: 'poppins, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
            labels: {
                formatter: function (y) {
                    if (typeof y !== 'undefined') {
                        return y.toFixed(0) + "";
                    } else {
                        return "";
                    }
                },
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        xaxis: {
            type: 'day',
            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan'
            ],
            axisBorder: {
                show: true,
                color: 'rgba(119, 119, 142, 0.05)',
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: true,
                borderType: 'solid',
                color: 'rgba(119, 119, 142, 0.05)',
                width: 6,
                offsetX: 0,
                offsetY: 0
            },
            labels: {
                rotate: -90,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
    }
    var chart = new ApexCharts(document.querySelector("#project-overview"), options);
    chart.render();
    /* Project Overview */

    /* Project Timeline */
    var options25 = {
        series: [
            {
                data: [
                    {
                        x: 'Design Phase',
                        y: [
                            new Date('2024-01-20').getTime(),
                            new Date('2024-02-08').getTime()
                        ],
                        fillColor: 'var(--primary02)'
                    },
                    {
                        x: 'Development',
                        y: [
                            new Date('2024-02-01').getTime(),
                            new Date('2024-02-15').getTime()
                        ],
                        fillColor: 'rgba(72, 247, 104, 0.3)'
                    },
                    {
                        x: 'Testing',
                        y: [
                            new Date('2024-02-15').getTime(),
                            new Date('2024-02-24').getTime()
                        ],
                        fillColor: 'rgba(235, 247, 72, 0.3)'
                    },
                    {
                        x: 'UAT',
                        y: [
                            new Date('2024-02-20').getTime(),
                            new Date('2024-03-06').getTime()
                        ],
                        fillColor: 'rgba(0, 227, 210, 0.3)'
                    },
                    {
                        x: 'Deployment',
                        y: [
                            new Date('2024-03-08').getTime(),
                            new Date('2024-03-19').getTime()
                        ],
                        fillColor: 'rgba(255, 74, 74, 0.3)'
                    },
                    {
                        x: 'Project closure',
                        y: [
                            new Date('2024-03-15').getTime(),
                            new Date('2024-03-28').getTime()
                        ],
                        fillColor: 'rgba(72, 247, 238, 0.3)'
                    }
                ]
            }
        ],
        chart: {
            height: 394,
            type: 'rangeBar'
        },
        plotOptions: {
            bar: {
                horizontal: true,
                distributed: true,
                dataLabels: {
                    hideOverflowingLabels: false
                },
                barWidth: 20,
                barHeight: 20,
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val, opts) {
                var label = opts.w.globals.labels[opts.dataPointIndex]
                return label
            },
            style: {
                colors: ['#f3f4f5', '#fff']
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            show: false
        },
        grid: {
            borderColor: '#f2f5f71a',
        }
    };
    var chart25 = new ApexCharts(document.querySelector("#project-timeline"), options25);
    chart25.render();
    /* Project Timeline */
        
}, 200);