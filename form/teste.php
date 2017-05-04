<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<title>Formulario</title>
		<link href="css/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
		<link href="css/style.css" rel="stylesheet" type="text/css" />
	</head>
	
	<body>

		<div class="resp"></div>
	
		<form id="formulario" method="post" enctype="multipart/form-data" name="formulario" action="recebe_teste.php">
			<button class="btn btn-add" type="button">
	        	<i class="fa fa-plus icone-btn" aria-hidden="true" ></i>
			</button>
			<div class="teste"></div>

			<input type="submit" name="" value="Enviar">
		</form>

		<script src="js/jquery-2.2.4.min.js"></script>
		<script type="text/javascript">
			$(function(){
				addItem();
				$('.btn-add').on('click', function(){
					addItem();
				});

				$('.teste').on('click', '.btn-remove', function(){
					$(this).closest('.input-group').remove();
				});
			});
			function addItem(){
				var html = '<div class="input-group">';
				html += '<input type="text" name="nome[]" placeholder="nome do aluno" />';
				html += '	<input type="text" name="foto" placeholder="foto do aluno" />';
				html += '	<input type="text" name="frase" placeholder="frase" />';
				html += '	<button class="btn btn-remove" type="button">';
	            html += '    	<i class="fa fa-plus icone-btn" aria-hidden="true" ></i>';
	            html += '	</button>';
				html += '</div>';

				$('.teste').append(html);
			}
		</script>
	</body>
</html>