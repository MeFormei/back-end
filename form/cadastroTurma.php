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
		<ul id="progress">
			<li>Turma</li>
			<li>Alunos</li>
			<li>Professores</li>
		</ul>

		<fieldset>
			<i class="fa fa-graduation-cap icone-turma" aria-hidden="true" ></i>
			<h2>Cadastro da turma</h2>
			<h3>Sobre a turma</h3>
			<input type="text" name="nome" placeholder="nome da turma" />
			<input type="text" name="foto" placeholder="foto da turma" />
			<input type="text" name="patrono" placeholder="patrono" />
			<input type="text" name="paraninfo" placeholder="paraninfo" />
			<h3>Sobre o curso</h3>
			<input type="text" name="instituicao" placeholder="nome da instituicao" />
			<input type="text" name="curso" placeholder="curso" />
			<input type="text" name="cordenador" placeholder="cordenador" />
			<input type="text" name="vice-cordenador" placeholder="vice-cordenador" />
			<input type="button" name="next1" class="next acao" value="proximo" />
			
		</fieldset>

		<fieldset class="fs2">
			<i class="fa fa-group icone-alunos" aria-hidden="true" ></i>
			<h2>Cadastro dos alunos</h2>
			<h3>Sobre o aluno</h3>

			<button class="btn btn-add" type="button">
                <i class="fa fa-plus icone-btn" aria-hidden="true" ></i>
            </button>
			<div class="teste">
			<div class="input-group">
				<input type="text" name="nome[]" placeholder="nome do aluno" />
				<input type="text" name="foto[]" placeholder="foto do aluno" />
				<input type="text" name="frase[]" placeholder="frase" />
				<button class="btn btn-remove" type="button">
       				<i class="fa fa-times icone-btn" aria-hidden="true" ></i>
        		</button>
			</div>
			</div>
			<button class="btn btn-add" type="button">
                <i class="fa fa-plus icone-btn" aria-hidden="true" ></i>
                <i class="fa fa-id-card-o icone-btn" aria-hidden="true" ></i>
            </button>
            <input type="button" name="prev" class="prev acao" value="anterior" />
			<input type="button" name="next2" class="next acao" value="proximo" />
		</fieldset>

		<fieldset>
			<i class="fa fa-university icone-professores" aria-hidden="true" ></i>
			<h2>Cadastro dos professores</h2>
			<h3>Lista de homenageados</h3>
			<input type="text" name="nome[]" placeholder="nome" />
			<input type="button" name="prev" class="prev acao" value="anterior" />
			<input type="submit" name="next" class="acao" value="enviar" />

		</fieldset>

		</form>

		<script src="js/jquery-2.2.4.min.js"></script>
		<script type="text/javascript" src="js/functions.js"></script>
	</body>
</html>