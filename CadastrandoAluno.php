<html>
<head>
<title>cadastro_aluno</title>
</head>
<body>
  
<?php
	$host = "localhost";
	$user = "root";
	$password = "";
	$dbName ="meformei";

	
	$conection = new mysqli($host, $user, $password, $dbName);
	if($conection->connect_error)
		die($conection);
	
	
	if($conection->query($sql) === TRUE){
		echo "New record created successfully" . $sql;
	} else {
		echo "Error: " . $sql . " " . mysqli_error($conection);
	}	
	$conection->close();
?>
	
<?php 

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