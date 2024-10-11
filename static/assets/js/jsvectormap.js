
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
        const chart = ApexCharts.getChartByID('bar-r'); // Asegúrate de que este ID es correcto
    
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
        console.log("Metano");
        fetch('http://127.0.0.1:8000/api/emisiones/')
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filter(item => item.state_name.toLowerCase() === stateName.toLowerCase() && item.gas_name === "Carbon Dioxide");
                
                console.log(`Datos filtrados para ${stateName}:`, filteredData);
    
                // Aquí es donde puedes actualizar la gráfica con los datos filtrados
                updateReversedBarChart2(filteredData);
            })
            .catch(error => console.error('Error al obtener los datos:', error));
    }
    
    /* Función de actualización de la gráfica */
    function updateReversedBarChart2(filteredData) {
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
    

    // window.ia = function(){
    //     console.log('hola')
    //       const client = new Groq({
    //           apiKey: process.env['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'], // This is the default and can be omitted
    //         });
          
    //         async function main() {
    //           const chatCompletion = await client.chat.completions.create({
    //             messages: [{ role: 'user', content: 'Explain the importance of low latency LLMs' }],
    //             model: 'llama3-8b-8192',
    //           });
          
    //           console.log(chatCompletion.choices[0].message.content);
    //      }
    //      main();

    // }

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

 /* italy vector map */
 var map = new jsVectorMap({
    selector: "#italy-map",
    map: "italy",
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
            "IT-65": "Abruzzo",
            "IT-77": "Basilicata",
            "IT-78": "Calabria",
            "IT-72": "Campania",
            "IT-45": "Emilia-Romagna",
            "IT-36": "Friuli Venezia Giulia",
            "IT-62": "Lazio",
            "IT-42": "Liguria",
            "IT-25": "Lombardia",
            "IT-57": "Marche",
            "IT-67": "Molise",
            "IT-21": "Piemonte",
            "IT-55": "Puglia",
            "IT-88": "Sardegna",
            "IT-82": "Sicilia",
            "IT-52": "Toscana",
            "IT-55": "Umbria",
            "IT-23": "Valle d'Aosta",
            "IT-34": "Veneto",
            "IT-32": "Trentino-Alto Adige",
            "IT-75": "Apulia"
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
        zoomOnScroll: false,
        zoomButtons: false,
    
        onRegionClick: function(event, code) {
            var states = {
                "RU-AL": "República de Altái",
                "RU-BA": "República de Basquiatia",
                "RU-BU": "República de Buriatia",
                "RU-DA": "República de Daguestán",
                "RU-IN": "República de Ingushetia",
                "RU-KB": "República de Kabardia-Balcaria",
                "RU-KL": "República de Kalmykia",
                "RU-KR": "República de Karachay-Cherkessia",
                "RU-KK": "República de Tuvá",
                "RU-MO": "República de Mordovia",
                "RU-SA": "República de Sajá (Yakutia)",
                "RU-TA": "República de Tatarstán",
                "RU-CH": "República de Chechenia",
                "RU-CR": "República de Crimea",
                "RU-AL": "República de Altái",
                "RU-AG": "República de Adiguea",
                "RU-KAM": "Kraj de Kamchatka",
                "RU-KR": "Kraj de Krasnodar",
                "RU-AL": "Kraj de Krasnoyarsk",
                "RU-NGR": "Kraj de Nizhni Nóvgorod",
                "RU-PRI": "Kraj de Primorie",
                "RU-STA": "Kraj de Stavropol",
                "RU-TY": "Kraj de Khabárovsk",
                "RU-VE": "Óblast de Vologda",
                "RU-VLA": "Óblast de Vladimir",
                "RU-VOR": "Óblast de Vorónezh",
                "RU-KAL": "Óblast de Kaliningrado",
                "RU-KIR": "Óblast de Kírov",
                "RU-LIP": "Óblast de Lipetsk",
                "RU-MAG": "Óblast de Magadán",
                "RU-MOS": "Óblast de Moscú",
                "RU-NGR": "Óblast de Nizhni Nóvgorod",
                "RU-NGR": "Óblast de Novgorod",
                "RU-OMS": "Óblast de Omsk",
                "RU-ORE": "Óblast de Orel",
                "RU-PEN": "Óblast de Penza",
                "RU-PER": "Óblast de Perm",
                "RU-RYA": "Óblast de Riazán",
                "RU-SAM": "Óblast de Samara",
                "RU-SAR": "Óblast de Saratov",
                "RU-SVE": "Óblast de Sverdlovsk",
                "RU-TUL": "Óblast de Tula",
                "RU-TY": "Óblast de Tyumen",
                "RU-ULY": "Óblast de Ulianovsk",
                "RU-CHU": "Óblast de Chukotka",
                "RU-YAR": "Óblast de Yaroslavl",
                "RU-TA": "Territorio de Altái",
                "RU-DA": "Territorio de Transbaikalia",
                "RU-TA": "Territorio de Krasnoyarsk",
                "RU-SK": "Territorio de Stavropol",
                "RU-KHA": "Territorio de Jabarovsk",
                "RU-DA": "Territorio de Amur",
                "RU-CH": "Territorio de Chukotka",
                "RU-SAK": "Óblast de Sakhalin",
                "RU-MOS": "Ciudad federal de Moscú",
                "RU-SPE": "Ciudad federal de San Petersburgo",
                "RU-SE": "Sebastopol"
            };
    
            console.log("El codigo es:" + code);
            if (states.hasOwnProperty(code)) {
                var stateName = states[code];
                console.log("El estado es:" + stateName);
                
                // Check the API functions
                console.log("Llamando a las funciones de emisiones para " + stateName);
                getEmissionsMethaneByState(stateName);
                getEmissionsCarbonByState(stateName);
                
                document.getElementById('state-title-3').textContent = stateName;
    
                // Smooth scroll
                smoothScrollTo(document.body.scrollHeight, 2000);
            } else {
                console.log("Estado no encontrado");
            }
        }
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
        
        zoomOnScroll: false,
        zoomButtons: false,
    
        onRegionClick: function(event, code) {
            var states = {
                "ES-NA": "Navarra",
                "ES-B": "Barcelona",
                "ES-AL": "Almería",
                "ES-CA": "Cádiz",
                "ES-CO": "Córdoba",
                "ES-GR": "Granada",
                "ES-MA": "Málaga",
                "ES-SE": "Sevilla",
                "ES-H": "Huelva",
                "ES-J": "Jaén",
                "ES-A": "Alicante",
                "ES-CS": "Castellón",
                "ES-V": "Valencia",
                "ES-AB": "Albacete",
                "ES-CR": "Ciudad Real",
                "ES-CU": "Cuenca",
                "ES-GU": "Guadalajara",
                "ES-TO": "Toledo",
                "ES-AV": "Ávila",
                "ES-BU": "Burgos",
                "ES-LE": "León",
                "ES-P": "Palencia",
                "ES-SA": "Salamanca",
                "ES-SG": "Segovia",
                "ES-SO": "Soria",
                "ES-VA": "Valladolid",
                "ES-ZA": "Zamora",
                "ES-CC": "Cáceres",
                "ES-BA": "Badajoz",
                "ES-M": "Madrid",
                "ES-BI": "Bizkaia",
                "ES-GI": "Gerona",
                "ES-SS": "Gipuzkoa",
                "ES-LO": "La Rioja",
                "ES-O": "Asturias",
                "ES-C": "La Coruña",
                "ES-LU": "Lugo",
                "ES-OR": "Ourense",
                "ES-PO": "Pontevedra",
                "ES-S": "Cantabria",
                "ES-Z": "Zaragoza",
                "ES-TE": "Teruel",
                "ES-HU": "Huesca",
                "ES-T": "Tarragona",
                "ES-L": "Lleida",
                "ES-GC": "Las Palmas",
                "ES-TF": "Santa Cruz de Tenerife",
                "ES-PM": "Baleares",
                "ES-MU": "Murcia",
                "ES-CE": "Ceuta",
                "ES-ML": "Melilla",
                "ES-AL": "Álava"
            };
    
            console.log("El codigo es:" + code);
            if (states.hasOwnProperty(code)) {
                var stateName = states[code];
                console.log("El estado es:" + stateName);
                
                // Check the API functions
                console.log("Llamando a las funciones de emisiones para " + stateName);
                getEmissionsMethaneByState(stateName);
                getEmissionsCarbonByState(stateName);
                
                document.getElementById('state-title-3').textContent = stateName;
    
                // Smooth scroll
                smoothScrollTo(document.body.scrollHeight, 2000);
            } else {
                console.log("Estado no encontrado");
            }
        }
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
        zoomOnScroll: false,
        zoomButtons: false,
    
        onRegionClick: function(event, code) {
            var states = {
                "nt": "Northwest Territories",
                "nu": "Nunavut",
                "ns": "Nova Scotia",
                "mb": "Manitoba",
                "sk": "Saskatchewan",
                "qc": "Québec",
                "pe": "Prince Edward Island",
                "bc": "British Columbia",
                "yt": "Yukon",
                "nb": "New Brunswick",
                "nl": "Newfoundland and Labrador",
                "on": "Ontario",
                "ab": "Alberta"
            };
    
            console.log("El codigo es:" + code);
            if (states.hasOwnProperty(code)) {
                var stateName = states[code];
                console.log("El estado es:" + stateName);
                
                // Check the API functions
                console.log("Llamando a las funciones de emisiones para " + stateName);
                getEmissionsMethaneByState(stateName);
                getEmissionsCarbonByState(stateName);
                
                document.getElementById('state-title-3').textContent = stateName;
    
                // Smooth scroll
                smoothScrollTo(document.body.scrollHeight, 2000);
            } else {
                console.log("Estado no encontrado");
            }
        }
    });

     /* mexico vector map */
     var map = new jsVectorMap({
        selector: "#mexico-map",
        map: "mexico",
        regionStyle: {
            initial: {
                stroke: "#e9e9e9",
                strokeWidth: .15,
                fill: "rgba(var(--warning-rgb))",
                fillOpacity: 1
            }
        },
        zoomOnScroll: false,
        zoomButtons: false,
    
        onRegionClick: function(event, code) {
            var states = {
                "MXBCN": "Baja California",
                "MXCHH": "Chihuahua",
                "MXCOA": "Coahuila",
                "MXTAM": "Tamaulipas",
                "MXNLE": "Nuevo León",
                "MXROO": "Quintana Roo",
                "MXCAM": "Campeche",
                "MXTAB": "Tabasco",
                "MXCHP": "Chiapas",
                "MXCOL": "Colima",
                "MXNAY": "Nayarit",
                "MXBCS": "Baja California Sur",
                "MXSIN": "Sinaloa",
                "MXYUC": "Yucatán",
                "MXVER": "Veracruz",
                "MXJAL": "Jalisco",
                "MXMIC": "Michoacán",
                "MXGRO": "Guerrero",
                "MXOAX": "Oaxaca",
                "MXMEX": "Estado de México",
                "MXPUE": "Puebla",
                "MXMOR": "Morelos",
                "MXQUE": "Querétaro",
                "MXHID": "Hidalgo",
                "MXGUA": "Guanajuato",
                "MXSLP": "San Luis Potosí",
                "MXZAC": "Zacatecas",
                "MXAGU": "Aguascalientes",
                "MXDUR": "Durango",
                "MXTLA": "Tlaxcala",
                "MXCMX": "Ciudad de México",
                "MXSON": "Sonora"
            };
    
            console.log("El codigo es:" + code);
            if (states.hasOwnProperty(code)) {
                var stateName = states[code];
                console.log("El estado es:" + stateName);
                
                // Check the API functions
                console.log("Llamando a las funciones de emisiones para " + stateName);
                getEmissionsMethaneByState(stateName);
                getEmissionsCarbonByState(stateName);
                
                document.getElementById('state-title-3').textContent = stateName;
    
                // Smooth scroll
                smoothScrollTo(document.body.scrollHeight, 2000);
            } else {
                console.log("Estado no encontrado");
            }
        }
    });

})();