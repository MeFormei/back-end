<html>
    <head>
        <title>Me Formei!</title>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="crossorigin="anonymous"></script>
    </head>
    <body>
        <div id="api">     
        </div>
    </body>
    <script>
        $.getJSON( "http://meformei/alunos", function(data){ 
            document.getElementById("api").innerHTML = data[0].nome + ' ' + data[0].frase;
            console.log(data);
        });
    </script>
</html>