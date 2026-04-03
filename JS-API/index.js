async function sendData() {
    var d = CapturarDados();
    let res = await fetch('http://localhost:3000/api/calculo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Avisamos que estamos enviando um JSON
        },
        body: JSON.stringify(
            {
            weight: d.weight,
            height: d.height
            }
        )
        
    });
    const resposta = await res.json();
    console.log(resposta)
}

function CapturarDados(){
    let inputP = document.getElementById('peso');
    let inputH = document.getElementById('altura');
    
    const weight = inputP.value;
    const height = inputH.value;
    
    return({height, weight});
}

btn = document.getElementById('btn');

btn.addEventListener("click", () => {
    alert(sendData());
}) 