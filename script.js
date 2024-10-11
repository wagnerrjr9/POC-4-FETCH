async function getRandomAdvice() {
    let data = {};
    try {
        let url = `https://api.adviceslip.com/advice`;
        let response = await fetch(url);
        data = await response.json();
    } catch (error) {
        console.log(error);
    }
    return data;
}

async function displayAdvice() {
    let data = await getRandomAdvice();
    let adviceElement = document.getElementById("advice");
    if (data.slip && data.slip.advice) {
        adviceElement.innerHTML = `<p>${data.slip.advice}</p>`;
    } else {
        adviceElement.innerHTML = `<p>Não foi possível obter um conselho.</p>`;
    }
}

displayAdvice();
