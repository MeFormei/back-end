<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

include("../database.php");
require '../vendor/autoload.php';
use \Slim\App;

$app = new \Slim\App;

$app->get('/alunos/{name}', function (Request $request, Response $response) use ($app, $con) {
        
    $name = $request->getAttribute('name');

    $alunos = mysqli_query($con , "SELECT * FROM alunos WHERE nome = '$name' ");
            
    $JSONArray = array();
    
    while($row = mysqli_fetch_assoc($alunos))
    {
        $row_array = array();
        $row_array['id'] = $row['id'];
        $row_array['nome'] = $row['nome'];
        $row_array['turma'] = $row['turma'];
        $row_array['frase'] = $row['frase'];
        
        array_push($JSONArray, $row_array);
    }
    
    $JSONObject = json_encode($JSONArray);
    
    $response->getBody()->write($JSONObject);
    
    return $response;
});

$app->get('/alunos', function (Request $request, Response $response) use ($app, $con) {
        
    $name = $request->getAttribute('name');

    $alunos = mysqli_query($con , "SELECT * FROM alunos");
            
    $JSONArray = array();
    
    while($row = mysqli_fetch_assoc($alunos))
    {
        $row_array = array();
        $row_array['id'] = $row['id'];
        $row_array['nome'] = $row['nome'];
        $row_array['turma'] = $row['turma'];
        $row_array['foto'] = 'http://meformei/img/'.$row['foto'];
        $row_array['frase'] = $row['frase'];
        
        array_push($JSONArray, $row_array);
    }
    
    $JSONObject = json_encode($JSONArray);
    
    $response->getBody()->write($JSONObject);
    
    return $response;
});


$app->get('/turma/cadastro', function (Request $request, Response $response) use ($app, $con) {
    
    header("Location: http://meformei/FormularioEntradaAluno.php"); /* Redirect browser */
    exit();
        
    return $response;
});

$app->post('/turma/cadastra', function (Request $request, Response $response) use ($app, $con) {
                
    $aluno = mysqli_real_escape_string($con, $_POST['aluno']);
    $frase = mysqli_real_escape_string($con, $_POST['frase']);  
    $extensao = strtolower(substr($_FILES['arquivo']['name'], -4));
    $img_nome = md5(time()).$extensao;
    $diretorio = "../img/";
    
    move_uploaded_file($_FILES['arquivo']['tmp_name'], $diretorio.$img_nome);
    
    $query = "INSERT INTO alunos (nome, foto, frase) VALUES ('$aluno', '$img_nome','$frase')";   
        
    mysqli_query($con, $query);
    
    $response->getBody()->write("test");
        
    header("Location: http://meformei/FormularioEntradaAluno.php"); /* Redirect browser */
    exit();
});


$app->run();