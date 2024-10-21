// "$" seria para chamar o JQuery e o ready seria pra quando ele tiver pronto, vai criar uma função
$(document).ready(function(){
//querySelector vai chamar os primeiros elementos que ele achar, nesse caso o primeiro cabeçario e o primeiro butão
//   console.log(document.querySelector('header button'))
//"$" pois esta chamando um elemento especifico
//   console.log($('#botao-cancelar'))
//addEventListener "click", que quando clickar vai acontecer o evento
//   document.querySelector('header button').addEventListener('click',function(){});   

// quando clickar no botão do cabeçario vai acontencer a ação(callback)
    $('header button').click(function (){
// Selecio o formulario, e quando clicka aparece ele, slide down aparce de cima pra baixo, gradualmente
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
// Selecio o formulario, e quando clicka no botão cancelar some ele, slide up recolhe o formulario de volta
        $('form').slideUp();
    })

// outra forma de fazer, nesse caso quando enviar (submit), vai acontecer o callback
    $('form').on('submit', function(e){
        e.preventDefault();

// Esse cifrão é para pegar um elemento especifico, nesse caso serviu como document.getElementById,lembrando que tem que botar o "#" para mostrar que é um id
//e o ".val()" seria como se fosse o ".value",só que no JQuery é assim, e é uma função então tem que colocar "()"
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
// constante para abrir a lista e fechar
        const novoItem = $('<li style="display:none"></li>');
//criando isso dentro da li, que pega a imagem, e coloca pra jogo, o appendTo("") que joga para dentro do lugar nesse caso pra dentor o <li>AQUI</li>
        $(`<img src="${enderecoDaNovaImagem}" /> `).appendTo(novoItem);
// a div é para poder associar a classe e o resto é so escrevendo o HTML com appendTo para poder passar pro HTML
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
// essa linha seria para pegar as informações do novo item e passar para a lista não ordenada,e aparecer na tela do usuario
        $(novoItem).appendTo('ul');
// para poder surgir devagarzim, só funciona se o display da imagem base tiver "none", e o 1000 ali seria o tempo de surgir, que seria em milisegundo por isso 1000
        $(novoItem).fadeIn(1000);
// para poder limpar o input do link da imagem depois de enviar botando dentro da função val=('')
        $('#endereco-imagem-nova').val('');
    })
})