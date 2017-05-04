<?php 

include("database.php");

if(isset($_POST['submit']) && isset($_FILES['arquivo']))
  {
    $aluno = mysqli_real_escape_string($con, $_POST['aluno']);
    $frase = mysqli_real_escape_string($con, $_POST['frase']);  
    $extensao = strtolower(substr($_FILES['arquivo']['name'], -4));
    $img_nome = md5(time()).$extensao;
    $diretorio = "img/";
     
    echo $_FILES['arquivo']['tmp_name'];
    
    if(move_uploaded_file($_FILES['arquivo']['tmp_name'], $diretorio.$img_nome))
    {
      echo "SUCESSO ARQUIVO!";
    }
    else
    {
      echo "DEU RUIM ARQUIVO!";
    }
    
    $query = "INSERT INTO alunos (nome, foto, frase) VALUES ('$aluno', '$img_nome','$frase')";
    
    if(mysqli_query($con, $query))
    {
      echo "SUCESSO!";
    }
    else
    {
      echo "DEU RUIM!";
    }
    
  }
  else
  {
    echo "DEU RUIM!2";
  }
?>