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

    const Agente = document.querySelector("#Agente").value;
    const LDAP = document.querySelector("#LDAP").value;
    const cognizantID = document.querySelector("#cogId").value;
    const tL = document.querySelector("#teamLeader").value;
    const dataOfAbstance = document.querySelector("#dataOfAbsance").value;
    const dataOfReturn = document.querySelector("#dateOfReturn").value;
    const totalDay = document.querySelector("#totalDay").value;
    const bussinesDay = document.querySelector("#bussinesDay").value;
    const reason = document.querySelector("#reason").value;
    const type = document.querySelector("#type").value;
    const documentation = document.querySelector("#documentation").value;
    const month = document.querySelector("#month").value;
    const year = document.querySelector("#year").value;
    const comments = document.querySelector("#comments").value;
    const screenshoot = document.querySelector("#screenshoot").value;


    document.addEventListener("DOMContentLoaded", function () {
    console.log("Tudo pronto");
    
   setInterval(function(){
    data1 = document.querySelectorAll('[type="date"]')[0].value;
  data2 = document.querySelectorAll('[type="date"]')[1].value;

  var date1 = new Date(data1);
  var date2 = new Date(data2);

  var diffTime = Math.abs(date2 - date1);
  var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  document.querySelector('#totalDay').value = diffDays  
  return diffDays;
},1000)
   
});
    
    
    fetch('https://api.sheetmonkey.io/form/jzi1PQfx9zyXR7TjiMHLzN', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Agente, LDAP, cognizantID: "Cognizant ID", tL, dataOfAbstance, dataOfReturn, totalDay, bussinesDay, month, year, comments, screenshoot})
    })
        .then(() => {
            removeLoading();
            document.querySelector("#Agente").value = '';
            document.querySelector("#LDAP").value = '';
            document.querySelector("#cogId").value = '';
            document.querySelector("#teamLeader").value = '';
            document.querySelector("#dataOfAbsance").value = '';
            document.querySelector("#dateOfReturn").value = '';
            
        });
}

document.querySelector('form').addEventListener('submit', handleSubmit);
