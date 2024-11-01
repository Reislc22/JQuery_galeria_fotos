$(document).ready(function(){
    $('form').on("submit",function(e){
        e.preventDefault()
        const novaTarefa = $('#tarefa-nova').val();
        const novaLinha = $('<li></li>')
// pega a "novaTarefa" e joga como texto dentro da "novaLinha" que seria o li
        novaLinha.text(novaTarefa);
        $(novaLinha).appendTo('ul');
        $('#tarefa-nova').val('');
    })

    $('ul').on('click','li',function(){
        $(this).css('text-decoration', 'line-through');
    })
})