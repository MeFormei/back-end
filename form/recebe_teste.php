<pre>
<?php
	print_r($_POST);
	$alunos = array();
	for($i = 0; $i < count($_POST['nome']); $i++){
		$alunos[$i] = array(
			'nome' => $_POST['nome'][$i],
			'foto' => $_POST['foto'][$i],
			'frase' => $_POST['frase'][$i],
		);
	}

	print_r($alunos);
?>
</pre>