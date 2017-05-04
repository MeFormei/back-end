$(function(){
	var atual_fieldset, next_fieldset, prev_fieldset;
	var formulario = $('form[name=formulario]');

	function next(elem){
		atual_fieldset = $(elem).parent();
		next_fieldset = $(elem).parent().next();

		$('#progress li').eq($('fieldset').index(next_fieldset)).addClass('ativo');
		atual_fieldset.hide(800);
		next_fieldset.show(800);
	};

	$('.prev').click(function(){
		atual_fieldset = $(this).parent();
		prev_fieldset = $(this).parent().prev();

		$('#progress li').eq($('fieldset').index(atual_fieldset)).removeClass('ativo');
		atual_fieldset.hide(800);
		prev_fieldset.show(800);
	});

	$('input[name=next1]').click(function(){
		var array = formulario.serializeArray();
		if(array[0].value == '' || array[1].value == '' || array[2].value == '' || array[3].value == '' || array[4].value == '' || array[5].value == '' || array[6].value == '' || array[7].value == ''){
			$('.resp').html('<div class="erros"><p>Preencha todos os dados sobre a turma.</p></div>');
		}else{
			$('.resp').html('');
			next($(this));
		}
	});
	$('.fs2').on('click', 'input[name=next2]', function(){
		var array = formulario.serializeArray();
		if(array[8].value == '' || array[9].value == '' || array[10].value == ''){
			$('.resp').html('<div class="erros"><p>Preencha todos os dados sobre os alunos.</p></div>');
		}else{
			$('.resp').html('');
			next($(this));
		}
	});

	$('input[type=submit]').click(function(evento){
		var array = formulario.serializeArray();
		if(array[11].value == ''){
			$('.resp').html('<div class="erros"><p>Preencha todos os campos abaixo.</p></div>');
		}else{
			$('.resp').html('<div class="ok"><p>Sua requisição foi enviada!</p></div>');
		}
		evento.preventDefault();

	});
/*
	$(document).on('click', '.btn-add', function(e){
		e.preventDefault();

		var inputGroup = $('.input-group').first(),
			newEntry = $(inputGroup.clone()).appendTo('.teste');
		newEntry.find('input').val('');
		inputGroup.find('.btn-add:not(:last)')
            .removeClass('btn-add').addClass('btn-remove')
            .html('<i class="fa fa-times icone-btn" aria-hidden="true" ></i>');


        $(this).removeClass('btn-add').addClass('btn-remove');

	}).on('click', '.btn-remove', function(e)
    {
		$(this).parents('.inputGroup:first').remove();

		e.preventDefault();
		return false;
	});
*/

$('.btn-add').on('click', function(){

	addItem();
});

$('.teste').on('click', '.btn-remove', function(){
	$(this).closest('.input-group').remove();
});

function addItem(){
		var html = '<div class="input-group">';
		html += '<input type="text" name="nome[]" placeholder="nome do aluno" />';
		html += '	<input type="text" name="foto[]" placeholder="foto do aluno" />';
		html += '	<input type="text" name="frase[]" placeholder="frase" />';
		html += '	<button class="btn btn-remove" type="button">';
        html += '    	<i class="fa fa-times icone-btn" aria-hidden="true" ></i>';
        html += '	</button>';
		html += '</div>';

		$('.teste').append(html);
	}
});