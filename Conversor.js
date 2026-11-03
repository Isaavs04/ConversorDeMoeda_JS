$(document).ready(function () {
    estadoBtn();
    $('#btnConverter').click(function () {
        let valor = $('#txtReal').val();
        let moeda = $('input[name="moeda"]:checked').val();
        calcularMoeda(moeda, valor);
        estadoBtn();
    })

    function calcularMoeda(moeda, valor) {
        const dollar = 5.44, euro = 6.08, libra = 7.29, iene = 0.034;
        let resultado
        if (moeda == 'Dolar') {
            resultado = valor * dollar;
        }
        else if (moeda == 'Euro') {
            resultado = valor * euro;
        }
        else if (moeda == 'Libra') {
            resultado = valor * libra;
        }
        else {
            resultado = valor * iene;
        }
        $('#txtConvertido').val(resultado.toFixed(2));
    }

    function estadoBtn() {
        let txtBox = $('#txtReal').val();
        if (txtBox != '') {
            $('#btnConverter').prop('disabled', false);
        }
        else {
            $('#btnConverter').prop('disabled', true);
        }
    }
})

