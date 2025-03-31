const rua = document.getElementById("rua");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");
const c = document.getElementById("cep");
let cep = "";
let obj = "";

async function acharCep() {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    if (response.status === 200 ) {
        obj = await response.json();
        if (obj.cep != undefined) {
            rua.value = obj.logradouro;
            cidade.value = obj.localidade;
            estado.value = obj.uf;
        }
    }
}
c.addEventListener("keyup", () => {
    if (c.value.length == 8) {
        cep = c.value
        acharCep()
    } else {
        rua.value = "";
        cidade.value = "";
        estado.value = "";
    }
})
c.mask('00000-000', {reverse: true});