const button = document.querySelector('button');

const adicionaLoading = () => {
    button.innerHTML = '<img src="/loading.png" class="loading"></img>';
}

const removeLoading = () => {
    button.innerHTML = 'Enviar';
}

const handleSubmit = (event) => {
    event.preventDefault();
    adicionaLoading();

    const name = document.querySelector('input[name="nomeAgente"]').value;
    const aldap = document.querySelector('input[name="aldapAgente"]').value;
    const numeroCaso = document.querySelector('input[name="numeroCaso"]').value;
    const dataAtendimento = document.querySelector('input[name="dataAtendimento"]').value;
    const status = document.querySelector("#status").value;
    const observacao = document.querySelector("#observacao").value;
    

    fetch('https://api.sheetmonkey.io/form/jzi1PQfx9zyXR7TjiMHLzN', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({Nome_Agente: name, ALDAP_Agente: aldap, Número_do_Caso: numeroCaso, Data_do_Atendimento: dataAtendimento, status, observacao})

    }).then(() => removeLoading());
}

document.querySelector('form').addEventListener('submit',handleSubmit);