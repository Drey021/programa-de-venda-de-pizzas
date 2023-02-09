    'use strict';

//Variaveis1
let somaPortuguesa = 0;
let somaCalabresa = 0;
let somaMista = 0;
let somaFrango = 0;
let somaDoce = 0;
//Variaveis2
let vendaPortuguesa = 0.00;
let vendaCalabresa = 0.00;
let vendaMista = 0.00;
let vendaFrango = 0.00;
let vendaDoce = 0.00;
//Variaveis3
let btnVendas = document.getElementById('Vendas');
let btnEstorno = document.getElementById('Estorno');
let btnPlanilha = document.getElementById('Export');

//Eventos
btnVendas.addEventListener('click',venda,false);
btnEstorno.addEventListener('click',estorno,false);
btnPlanilha.addEventListener('click',planilha,false);

//funções
function venda(e)
{
    if(document.getElementById('Portuguesa').checked)
    {
        somaPortuguesa = somaPortuguesa + 1;
        vendaPortuguesa = vendaPortuguesa + 25.00;
        document.getElementById('resultadoPortuguesa').innerHTML = somaPortuguesa;
        document.getElementById('vendaPortuguesa').innerHTML = vendaPortuguesa.toFixed(2);
    }else if(document.getElementById('Mista').checked)
    {
        somaMista = somaMista + 1;
        vendaMista = vendaMista + 25.00;
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
    }
    else if(document.getElementById('Calabresa').checked)
    {
        somaCalabresa = somaCalabresa + 1;
        vendaCalabresa = vendaCalabresa + 20.00;
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }else if(document.getElementById('Frango').checked)
    {
        somaFrango = somaFrango + 1;
        vendaFrango = vendaFrango + 20.00;
        document.getElementById('resultadoFrango').innerHTML = somaFrango;
        document.getElementById('vendaFrango').innerHTML = vendaFrango.toFixed(2);
    }else if(document.getElementById('Doce').checked)
    {
        somaDoce = somaDoce + 1;
        vendaDoce = vendaDoce + 30.00;
        document.getElementById('resultadoDoce').innerHTML = somaDoce;
        document.getElementById('vendaDoce').innerHTML = vendaDoce.toFixed(2);
    }
}

function estorno(e)
{
    if(document.getElementById('Portuguesa').checked)
    {
        somaPortuguesa = somaPortuguesa - 1;
        vendaPortuguesa = vendaPortuguesa - 25.00;
        if(somaPortuguesa < 0)
        {
            somaPortuguesa = 0;
            vendaPortuguesa = 0.00;
        }
        document.getElementById('resultadoPortuguesa').innerHTML = somaPortuguesa;
        document.getElementById('vendaPortuguesa').innerHTML = vendaPortuguesa.toFixed(2);
    }else if(document.getElementById('Mista').checked)
    {
        somaMista = somaMista - 1;
        vendaMista = vendaMista - 25.00;
        if(somaMista < 0)
        {
            somaMista = 0;
            vendaMista = 0.00;
        }
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
    }
    else if(document.getElementById('Calabresa').checked)
    {
        somaCalabresa = somaCalabresa - 1;
        vendaCalabresa = vendaCalabresa - 20.00;
        if(somaCalabresa < 0)
        {
            somaCalabresa = 0;
            vendaCalabresa = 0.00;
        }
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }else if(document.getElementById('Frango').checked)
    {
        somaFrango = somaFrango - 1;
        vendaFrango = vendaFrango - 20.00;
        if(somaFrango < 0)
        {
            somaFrango = 0;
            vendaFrango = 0.00;
        }
        document.getElementById('resultadoFrango').innerHTML = somaFrango;
        document.getElementById('vendaFrango').innerHTML = vendaFrango.toFixed(2);
    }else if(document.getElementById('Doce').checked)
    {
        somaDoce = somaDoce - 1;
        vendaDoce = vendaDoce - 30.00;
        if(somaDoce < 0)
        {
            somaDoce = 0;
            vendaDoce = 0.00;
        }
        document.getElementById('resultadoDoce').innerHTML = somaDoce;
        document.getElementById('vendaDoce').innerHTML = vendaDoce.toFixed(2);
    }
}

function planilha(e)
{
    TableToExcel.convert(document.getElementById('table'))
}