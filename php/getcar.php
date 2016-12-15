<?php
    //open connection to mysql db
    $connection = mysqli_connect("localhost","root","","myclass") or die("Error " . mysqli_error($connection));

	//create an array
    $emparray = array();
    $sql = "select * from tbl_car";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));
	while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }
	
	
	
	echo json_encode($emparray);
	
	?>
	
