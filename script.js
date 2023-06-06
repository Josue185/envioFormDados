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

    
    const aldapAgente = document.querySelector('input[name="aldapAgente"]').value;
    const dataAtendimento = document.querySelector("#dataAtendimento").value;
    const issue = document.querySelector("#issue").value;
    const screenshoot = document.querySelector("#screenshoot").value;
    const status = document.querySelector("#status").value;
    const observacao = document.querySelector("#observacao").value;
    

    fetch('https://api.sheetmonkey.io/form/jzi1PQfx9zyXR7TjiMHLzN', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({aldapAgente, issue, screenshoot,Data_do_Atendimento: dataAtendimento, status, observacao})

 }).then(() => {
        removeLoading();
        form.reset(); // Limpa o formulário
    });
}


document.querySelector('form').addEventListener('submit',handleSubmit);


