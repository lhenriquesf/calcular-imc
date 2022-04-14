// Capturar evento de submit do formulario
const form = document.querySelector('#form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura')
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // if(!peso && !altura){
    //     setResultado('Peso e altura invalidos', false);
    //     return;
    // }

    if(!peso){
        setResultado('Peso invalido', false);
        return;
    }

    if(!altura){
        setResultado('Altura invalida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const grauImc = getGrauImc(imc);

    const msg = `Seu IMC e ${imc} (${grauImc}).`;

    setResultado(msg, true);
});

/*
Menos do que 18,5 		Abaixo do peso
Entre 18,5 e 24,9 		Peso normal
Entre 25 e 29,9 		Sobrepeso
Entre 30 e 34,9 		Obesidade grau 1
Entre 35 e 39,9 		Obesidade grau 2
Mais do que 40 		    Obesidade grau 3
*/

function getGrauImc(imc){
    const grau = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc>= 39.9) return grau[5];
    if(imc>=34.9) return grau[4];
    if(imc>=29.9) return grau[3];
    if(imc>=24.9) return grau[2];
    if(imc>=18.5) return grau[1];
    if(imc<18.5) return grau[0];
}

function getImc(peso, altura){
    const imc = peso/(altura**2);
    return imc.toFixed(2);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if(isValid){
        p.classList.add('paragrafo-resultado');
    }else {
        p.classList.add('invalido');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}
