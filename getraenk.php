<?php 

$id_cocktail = $GET["cocktail"];

try {
	// Try Connect to the DB with mysqli_connect function - Params {hostname, userid, password, dbname}
	$link = mysqli_connect("localhost", "root", "root", "automat");
} catch (mysqli_sql_exception $e) { // Failed to connect? Lets see the exception details..
	echo "MySQLi Error Code: " . $e->getCode() . "<br />";
	echo "Exception Msg: " . $e->getMessage();
	exit; // exit and close connection.
}
    
$sql = "SELECT menge, zutaten_id FROM automat.tb_cocktail_zutaten WHERE cocktail_id = ".$id_cocktail;
$result = mysqli_query($link, $sql);
$data = array();

while($row = mysqli_fetch_assoc($result))
{
	$data[] = $row;
}
$row = array();

$gesSekunden = 0;

$pumpe= array("p1" => 0, "p2" => 0,"p3" => 0,"p4" => 0,"p5" => 0,"p6" => 0);
foreach($data as $row){
	$gesSekunden += $row["menge"];
	$sql = "SELECT pumpe FROM tb_zutaten WHERE id = ".$row["zutaten_id"];
	$result2 = mysqli_query($link, $sql);
	$pumpeId = 0;
	while($row2 = mysqli_fetch_assoc($result2))
	{
		$pumpeId = $row2["pumpe"];
	}
	
	
	
	$pumpe["p".$pumpeId] = $row["menge"];
	
}
mysqli_close($link); 

$pyout = exec('sudo -u pi -p raspberry python /var/www/html/getraenk.py '.$pumpe["p1"]. ' ' .$pumpe["p2"]. ' ' . $pumpe["p3"]. ' '. $pumpe["p4"]. ' ' . $pumpe["p5"]. ' '. $pumpe["p6"]);
//echo $pyout;

echo $gesSekunden;





?>
