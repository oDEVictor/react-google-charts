


const form = document.querySelector("#form");                       //Capturar o evento de submit do form / SELECIONAR ID
form.addEventListener('submit', function (e) {                        //capturar e prevenir evento / seleciona o evento e cria uma função podendo ser anonima tbm
    e.preventDefault();                                             // evita o envio do form
    const inputPeso = e.target.querySelector('#peso');              //e.target informa qual o elemento foi selecionado
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1','Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc > 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement("p");                           //criando novo elemento no caso um parágrafo.
    return p;
}

function addClassElement() {
    p.classList.add('paragrafo-resultado');                          // cria uma CLASS dentro do elemtento para ser identificado podendo ser usando para CSS.Valido para todos os elementos
}

function setResultado(msg, isValid) {                                          // função para adicionar algo dentro do "resultado"
    const resultado = document.querySelector("#resultado");          // capturar o resultado pelo ID
    resultado.innerHTML = '';                                        //  usado para receber o conteúdo de um elemento HTML ou para definir um novo conteúdo para ele

    const p = criaP();

    if(isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;

    resultado.appendChild(p);
}
