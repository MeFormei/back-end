<html>
<head>
<title>cadastro_aluno</title>
</head>
<body>
  
<?php
	$host = "meformei-victo10633472.codeanyapp.com/";
	$user = "root";
	$password = "";
	$dbName ="meformei";

	echo "olar"
	
	$conection = new mysqli($host, $user, $password, $dbName);
	if($conection->connect_error)
		die($conection);
	
	$nome_aluno = $_POST['nome_aluno'];
	$frase_aluno = $_POST['frase_aluno'];
	$foto_aluno = $_POST['foto_aluno'];
	
	$sql_aluno = "INSERT INTO alunos(nome, frase, foto) VALUES('$nome_aluno', '$frase_aluno', '$foto_aluno')" ;
	
	if($conection->query($sql) === TRUE){
		echo "New record created successfully" . $sql;
	} else {
		echo "Error: " . $sql . " " . mysqli_error($conection);
	}	
	$conection->close();
	

?>
	
	
<?php
	$conection = new mysqli($host, $user, $password, $dbName);
	mysql_select_db($dbName, $conection);
	$query = sprintf("SELECT nome FROM alunos");
	$dados = mysql_query($query, $conection) or die(mysql_error());
	$linha = mysql_fetch_assoc($dados);
	$total = mysql_num_rows($dados);
	if($total > 0) {
		do {
	?>
			<p><?=$linha['nome']?></p>
	<?php
		}while($linha = mysql_fetch_assoc($dados));
	}
?>
	
</body>
</html>