const button = document.querySelector('button');

const adicionaLoading = () => {
    button.innerHTML = '<img src="loading.png" class="loading"></img>';
}

const removeLoading = () => {
    button.innerHTML = 'Enviar';
}

const handleSubmit = (event) => {
    event.preventDefault();
    adicionaLoading();

    const aldap = document.querySelector('input[name="aldapAgente"]').value;
    const dataAtendimento = document.querySelector("#dataAtendimento").value;
    const status = document.querySelector("#status").value;
    const observacao = document.querySelector("#observacao").value;
    

    fetch('https://api.sheetmonkey.io/form/jzi1PQfx9zyXR7TjiMHLzN', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ALDAP_Agente: aldapAgente, Data_do_Atendimento: dataAtendimento, status, observacao})

    }).then(() => removeLoading());
}

document.querySelector('form').addEventListener('submit',handleSubmit);
