function enviar() {
   var nome = document.getElementById("nome").value,
   var idade = document.getElementById("idade").value,
    var curso = document.getElementById("curso").value
}
fetch("https://script.google.com/macros/s/AKfycbyfKfrcIzEVAfjiKC4rp0nNXmDp3xUxSWt2eH3YDzCqlWf2wpgSSho12FgROiMlC-v-/exec",{
    method: "POST",
    body: JSON.stringify(dados)
})
.then(res => res.text())
.then(respoosta => {
    alert("dados enviados com sucesso!");
    console.log(resposta);
})
.catch(error => {
    console.error("Erro:", error);
});