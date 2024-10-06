

(function () {

    "use strict";
    // const fs = require('fs');
    /* basic vector map */

    function getEmissionsMethaneByState(stateName) {
        console.log("Metano");
        fetch('http://127.0.0.1:8000/api/emisiones/')
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filter(item => item.state_name.toLowerCase() === stateName.toLowerCase() && item.gas_name === "Methane");
                
                console.log(`Datos filtrados para ${stateName}:`, filteredData);
    
                // Aquí es donde puedes actualizar la gráfica con los datos filtrados
                updateReversedBarChart(filteredData);
            })
            .catch(error => console.error('Error al obtener los datos:', error));
    }
    
    /* Función de actualización de la gráfica */
    function updateReversedBarChart(filteredData) {
        // Extraemos los valores y las categorías para el chart
        const emissionsData = filteredData.map(item => item.co2e_emission);
        const years = filteredData.map(item => item.year);
    
        // Intentamos obtener el gráfico por su ID
        const chart = ApexCharts.getChartByID('reversed-bar-chart'); // Asegúrate de que este ID es correcto
    
        if (chart) {
            chart.updateOptions({
                series: [{
                    name: 'Emisiones de Metano', // Nombre de la serie
                    data: emissionsData  // Nuevos datos para el gráfico
                }],
                xaxis: {
                    categories: years  // Nuevas categorías (años) para el eje X
                }
            });
    
            console.log("Gráfica actualizada con los siguientes datos:", emissionsData, years);
        } else {
            console.error('El gráfico de metano no está definido. Asegúrate de que el ID sea correcto y que el gráfico haya sido creado.');
        }
    }
    
    function getEmissionsCarbonByState(stateName) {
        console.log("Carbon");
        fetch('http://127.0.0.1:8000/api/emisiones/')
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filter(item => item.state_name.toLowerCase() === stateName.toLowerCase() && item.gas_name === "Carbon Dioxide");
                
                console.log(`Datos filtrados para ${stateName}:`, filteredData);
    
                // Aquí es donde puedes actualizar la gráfica con los datos filtrados
                updateBasicBarChart(filteredData);
            })
            .catch(error => console.error('Error al obtener los datos:', error));
    }
    
    /* Función de actualización de la gráfica */
    function updateBasicBarChart(filteredData) {
        // Extraemos los valores y las categorías para el chart
        const emissionsData = filteredData.map(item => item.co2e_emission);
        const years = filteredData.map(item => item.year);
        
        // Obtenemos el gráfico por su ID
        const chart = ApexCharts.getChartByID('bar-basic'); // Asegúrate de que este ID es correcto
        
        // Verificamos si el gráfico está definido
        if (chart) {
            chart.updateOptions({
                series: [{
                    name: 'Emisiones de Carbono', // Nombre de la serie
                    data: emissionsData  // Nuevos datos para el gráfico
                }],
                xaxis: {
                    categories: years  // Nuevas categorías (años) para el eje X
                }
            });
    
            console.log("Gráfica actualizada con los siguientes datos:", emissionsData, years);
        } else {
            console.error('El gráfico de carbono no está definido. Asegúrate de que el ID sea correcto y que el gráfico haya sido creado.');
        }
    }
    
    
    /* map with markers */
    var markers = [{
        name: 'Russia',
        coords: [61, 105],
        style: {
            fill: '#5c5cff'
        }
    },
    {
        name: 'Greenland',
        coords: [72, -42],
        style: {
            fill: '#ff9251'
        }
    },
    {
        name: 'Canada',
        coords: [56, -106],
        style: {
            fill: '#56de80'
        }
    },
    {
        name: 'Palestine',
        coords: [31.5, 34.8],
        style: {
            fill: 'yellow'
        }
    },
    {
        name: 'Brazil',
        coords: [-14.2350, -51.9253],
        style: {
            fill: '#000'
        }
    },
    ];

    var map = new jsVectorMap({
        map: 'world_merc',
        selector: '#marker-map',
        markersSelectable: true,
        // markersSelectableOne: true,

        onMarkerSelected(index, isSelected, selectedMarkers) {
            console.log(index, isSelected, selectedMarkers);
        },

        // -------- Labels --------
        labels: {
            markers: {
                render: function (marker) {
                    return marker.name
                },
            },
        },

        // -------- Marker and label style --------
        markers: markers,
        markerStyle: {
            hover: {
                stroke: "#DDD",
                strokeWidth: 3,
                fill: '#FFF'
            },
            selected: {
                fill: '#ff525d'
            }
        },
        markerLabelStyle: {
            initial: {
                fontFamily: 'Poppins',
                fontSize: 13,
                fontWeight: 500,
                fill: '#35373e',
            },
        },
    })

    /* map with image markers */
    var markers = [
        {
            name: 'Palestine',
            coords: [31.5, 34.8],
        },
        {
            name: 'Russia',
            coords: [61, 105],
        },
        {
            name: 'greenland',
            coords: [72, -42],
        },
        {
            name: 'Canada',
            coords: [56, -106],
        },
    ];
    var map = new jsVectorMap({
        map: 'world_merc',
        selector: '#marker-image-map',

        labels: {
            markers: {
                render: function (marker) {
                    return marker.name
                }
            }
        },
        markers: markers,
        markerStyle: {
            initial: {
                image: true
            }
        },
        series: {
            markers: [{
                attribute: 'image',
                scale: {
                    marker1title: {
                        url: 'static/assets/images/brand-logos/toggle-logo.png',
                        offset: [10, 0]
                    },
                    marker2title: {
                        url: 'static/assets/images/brand-logos/toggle-logo.png',
                        offset: [10, 0]
                    }
                },
                values: {
                    0: 'marker1title',
                    1: 'marker2title',
                    2: 'marker2title',
                    3: 'marker1title',
                }
            }],
        }
    })

    /* maps with lines */
    var markers = [
        { name: 'Russia', coords: [61.5240, 105.3188] },
        { name: 'Egypt', coords: [26.8206, 30.8025] },
        { name: 'Greenland', coords: [71.7069, -42.6043], offsets: [2, 10] },
        { name: 'Canada', coords: [56, -106], offsets: [-7, 12] },
    ]

    var lines = [
        { from: 'Russia', to: 'Egypt', style: { stroke: '#abb0b7', strokeWidth: 1.5 } },
        { from: 'Canada', to: 'Russia', style: { stroke: '#abb0b7', strokeWidth: 1.5 } },
    ]
    new jsVectorMap({
        map: 'world_merc',
        selector: document.querySelector('#lines-map'),
        // -------- Labels --------
        labels: {
            markers: {
                render: function (marker) {
                    return marker.name
                },
                offsets: function (index) {
                    return markers[index].offsets || [0, 0]
                }
            },
        },
        // -------- Marker and label style --------
        markers: markers,
        lines: lines,
        lineStyle: {
            animation: true,
            strokeDasharray: "6 3 6",
        },
        markerStyle: {
            initial: {
                r: 6,
                fill: '#1266f1',
                stroke: '#fff',
                strokeWidth: 3,
            }
        },
        markerLabelStyle: {
            initial: {
                fontSize: 13,
                fontWeight: 500,
                fill: '#35373e',
            },
        },
    })

    /* us vector map */
    var map = new jsVectorMap({
        selector: "#us-map",
        map: "us_merc_en",
        regionStyle: {
            initial: {
                stroke: "#e9e9e9",
                strokeWidth: .15,
                fill: "var(--primary-color)",
                fillOpacity: 1
            }
        },
        zoomOnScroll: false,
        zoomButtons: false,
        onRegionClick: function(event, code) {
            
            var states = {
                "US-AL": "Alabama",
                "US-AK": "Alaska",
                "US-AZ": "Arizona",
                "US-AR": "Arkansas",
                "US-CA": "California",
                "US-CO": "Colorado",
                "US-CT": "Connecticut",
                "US-DE": "Delaware",
                "US-FL": "Florida",
                "US-GA": "Georgia",
                "US-HI": "Hawaii",
                "US-ID": "Idaho",
                "US-IL": "Illinois",
                "US-IN": "Indiana",
                "US-IA": "Iowa",
                "US-KS": "Kansas",
                "US-KY": "Kentucky",
                "US-LA": "Louisiana",
                "US-ME": "Maine",
                "US-MD": "Maryland",
                "US-MA": "Massachusetts",
                "US-MI": "Michigan",
                "US-MN": "Minnesota",
                "US-MS": "Mississippi",
                "US-MO": "Missouri",
                "US-MT": "Montana",
                "US-NE": "Nebraska",
                "US-NV": "Nevada",
                "US-NH": "New Hampshire",
                "US-NJ": "New Jersey",
                "US-NM": "New Mexico",
                "US-NY": "New York",
                "US-NC": "North Carolina",
                "US-ND": "North Dakota",
                "US-OH": "Ohio",
                "US-OK": "Oklahoma",
                "US-OR": "Oregon",
                "US-PA": "Pennsylvania",
                "US-RI": "Rhode Island",
                "US-SC": "South Carolina",
                "US-SD": "South Dakota",
                "US-TN": "Tennessee",
                "US-TX": "Texas",
                "US-UT": "Utah",
                "US-VT": "Vermont",
                "US-VA": "Virginia",
                "US-WA": "Washington",
                "US-WV": "West Virginia",
                "US-WI": "Wisconsin",
                "US-WY": "Wyoming"
            };
            console.log("El codigo es:"+code);
            if (states.hasOwnProperty(code)) {
                var stateName = states[code];
                console.log("El estado es:"+stateName);
                document.getElementById('state-title-3').textContent = stateName;
                //AQUÍ DEBEMOS MANDAR A LLAMAR LA FUNCIÓN QUE MODIFICARÁ LA GRÁFICA
                getEmissionsMethaneByState(stateName);
                getEmissionsCarbonByState(stateName);
            } else {
                console.log("Estado no encontrado");
            }

            function smoothScrollTo(endY, duration) {
                var startY = window.scrollY;
                var distance = endY - startY;
                var startTime = new Date().getTime();
            
                function scroll() {
                    var currentTime = new Date().getTime();
                    var time = Math.min(1, (currentTime - startTime) / duration);
                    var easedTime = (time * (2 - time));
            
                    window.scrollTo(0, startY + (distance * easedTime));
            
                    if (time < 1) {
                        requestAnimationFrame(scroll);
                    }
                }
            
                requestAnimationFrame(scroll);
            }
            smoothScrollTo(document.body.scrollHeight, 2000);
        }
    }
);

    

    /* russia vector map */
    var map = new jsVectorMap({
        selector: "#russia-map",
        map: "russia",
        regionStyle: {
            initial: {
                stroke: "#e9e9e9",
                strokeWidth: .15,
                fill: "#fc6c85",
                fillOpacity: 1
            }
        },
    });

    /* spain vector map */
    var map = new jsVectorMap({
        selector: "#spain-map",
        map: "spain",
        regionStyle: {
            initial: {
                stroke: "#e9e9e9",
                strokeWidth: .15,
                fill: "#45d65b",
                fillOpacity: 1
            }
        },
    });

    /* canada vector map */
    var map = new jsVectorMap({
        selector: "#canada-map",
        map: "canada",
        regionStyle: {
            initial: {
                stroke: "#e9e9e9",
                strokeWidth: .15,
                fill: "rgba(var(--warning-rgb))",
                fillOpacity: 1
            }
        },
    });

})();