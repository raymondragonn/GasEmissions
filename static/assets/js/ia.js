// import Groq from 'groq-sdk';

window.ia = function() {
    console.log('hola');
    let ia = 'La contaminación por dióxido de carbono (CO₂) varía significativamente entre diferentes estados de EE.UU. y a lo largo del tiempo, mostrando tanto tendencias ascendentes como descendentes. En Oregon, las emisiones de CO₂ fluctúan de 2017 a 2022, con un aumento considerable en 2019 y una disminución gradual en años posteriores. Pennsylvania, que emite mucho más CO₂ que Oregon, muestra una tendencia de disminución constante desde 2010, con una reducción significativa a partir de 2016. Rhode Island presenta niveles relativamente bajos de emisiones y una ligera disminución desde 2017. Por otro lado, en South Dakota las emisiones también son variables, con una disminución en 2020 seguida de un aumento hacia 2022. South Carolina muestra una disminución gradual desde 2010 hasta 2020, pero un leve repunte en los últimos años. En resumen, las tendencias de emisión de CO₂ varían ampliamente entre los estados, lo que refleja diferencias en sus economías, fuentes de energía y políticas ambientales. Si bien algunos estados han logrado reducciones notables en la última década, otros han experimentado fluctuaciones y desafíos en la reducción sostenida de emisiones.';
    
    const outputElement = document.getElementById('ia-output');
    if (outputElement) {
        outputElement.textContent = ''; // Clear any existing content
        const words = ia.split(' ');
        let index = 0;

        const intervalId = setInterval(() => {
            if (index < words.length) {
                outputElement.textContent += words[index] + ' ';
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 50); // Adjust the delay (in milliseconds) as needed
    } else {
        console.error('Element with id "ia-output" not found.');
    }
};
