<?php 
    $con = mysqli_connect("localhost", "root", "", "meformei");
    
    if(mysqli_connect_errno())
    {
        echo 'FAILED TO CONNECT DATABASE!'.mysqli_connect_error();
    }

?>