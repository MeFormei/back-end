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

$('.fs2').on('click', '.btn-add-aluno', function(){
	addAlunoContent();
});

$('.fs2').on('click', '.btn-remove', function(){
	/*
	$(this).closest('.input-group').remove();
	*/
});

$('.fs2').on('click', '.btn-add-homenageado', function(){
	addHomenageadoContent();
});

function addHomenageadoContent(){
	/*
	var html =	'<div class="input-group" style="margin: 10px 0 10px 0;">';
		html +=	'<input type="text" name="nome[]" placeholder="&#xf007; Nome do homenageado" required/>';
		html += '<input type="text" name="turmaName[]" placeholder="&#xf19d; Nome da turma" required/>';
		html += '<input type="text" name="anoFromacao[]" placeholder="&#xf073; Nno que a turma se formou" required/>';
		html += '<input type="text" name="curriculo[]" placeholder="&#xf2c3; Currículo lattes" required/>';
		html +=	'<button class="btn btn-remove" type="button">';
       	html +=		'<i class="fa fa-times icone-btn" aria-hidden="true" ></i>';
        html +=	'</button>';
        html += '</div>';

	$('.pivotHomenageado').append(html);
	*/
}

function addAlunoContent(){
	/*
		var html = '<div class="input-group" style="margin: 10px 0 10px 0;">';
		html += '<input type="text" name="nome[]" placeholder="&#xf007; Nome do aluno" required/>';
		html +=		'<br>';
		html +=		'Foto do aluno:';
		html +=		'<input type="file" name="foto[]" style="background: white" placeholder="&#xf1c5; Foto do aluno" required/>';
		html += 	'<input type="text" name="frase[]" placeholder="&#xf27b; Frase" required/>';
		html += 	'<input type="text" name="turmaName[]" placeholder="&#xf19d; Nome da turma" required/>';
		html += 	'<input type="text" name="anoFromacao[]" placeholder="&#xf073; Ano que a turma se formou" required/>';
		html += 	'<button class="btn btn-remove" type="button">';
        html += 		'<i class="fa fa-times icone-btn" aria-hidden="true" ></i>';
        html += 	'</button>';
		html += '</div>';

		$('.pivotAluno').append(html);
	*/

	}

$('.btn-menu-alunos').on('click', function(){
	addAlunosForm();
});

function addAlunosForm(){

		window.location.href = "";
	}

$('.btn-menu-homenageados').on('click', function(){
	addHomenageadosForm();
});

function addHomenageadosForm(){

		window.location.href = "";
	}

$('.btn-menu-turma').on('click', function(){
	addTurmaForm();
});

function addTurmaForm(){

		window.location.href = "";
	}
});