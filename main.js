const btn = document.querySelector('button');

// get the advice using async await GET


const getAdvice = async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');

        if (response.ok) {
            const jsonResponse = await response.json();
            const advice_req = jsonResponse.slip.advice;
            return advice_req;
        }
        throw new Error ('Advice Request Failed');
    } catch (error) {
        console.log(error);
    }
}

const getId = async () => {
    try {
        const response = await fetch ('https://api.adviceslip.com/advice')

        if(response.ok) {
            const jsonResponse = await response.json();

            const advice_id_req = jsonResponse.slip.id;

            return advice_id_req;
        }
        throw newError ('Id Request Failed');
    } catch (error) {
        console.log(error)
    }
}

const displayRequest = async () => {
    const n_advice = document.querySelector('h1');
    const advice_container = document.querySelector('p');
    if (advice_container.childNodes.length > 0) {
        n_advice.innerHTML = '';
        advice_container.innerHTML = '';
    }

    const advice = await getAdvice();
    const id = await getId();

    n_advice.innerHTML = `ADVICE #${id}`;
    advice_container.innerHTML =  `"${advice}"`;
}

btn.onclick = displayRequest;
