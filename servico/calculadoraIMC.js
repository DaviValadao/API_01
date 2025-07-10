function efetuarCalculoIMC (peso, altura)
{
    let imc = peso / (altura * altura);

    return imc;
}

function retornarStatusIMC (imc) 
{
    let status;

    if(imc < 18.5)
    {
        status ='Abaixo do peso';
    }
    else if(imc >= 18.5 && imc <24.9)
    {
        status ='Peo normal';
    }
    else if (imc >= 24.9 && imc <30)
    {
        status ='Acima do peso';
    }
    else 
    {
        status = 'Obeso';
    }

    return status;

}

function validaParamentro(paramentro){
    if(isNaN(paramentro))
    {
        return false;
    }
    else
    {
        return true;
    }
}

exports.validaParamentro = validaParamentro;
exports.efetuarCalculoIMC = efetuarCalculoIMC;
exports.retornarStatusIMC = retornarStatusIMC;