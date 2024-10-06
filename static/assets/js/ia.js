import Groq from 'groq-sdk';


window.ia = function(){
    console.log('hola')
    const client = new Groq({
        apiKey: process.env['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'],  //This is the default and can be omitted
        });
            
        async function main() {
        const chatCompletion = await client.chat.completions.create({
            messages: [{ role: 'user', content: 'Explain the importance of low latency LLMs' }],
            model: 'llama3-8b-8192',
        });
            
        console.log(chatCompletion.choices[0].message.content);
        }
        main();
}

