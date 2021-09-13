<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// get posted data
$data = json_decode(file_get_contents("php://input"));
$met = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

$variablepar1 = $_REQUEST['id'];

// make sure data is not empty
if(
    !empty($data->id) &&
    !empty($data->name) &&
    !empty($data->description) &&
    !empty($data->price)
){ 
  if($data->price >= 100 and $data->price <= 170)
  {
  $special = "Si";
  }
  else{
    $special = "No";
  }
    http_response_code(200);

    echo json_encode(array(
        "method" => $met,
        "message" => "Datos recibidos.",
        "data-received" => array(
          "id" => $data->id,
          "name" => $data->name,
          "price" => $data->price,
          "tax" => ($data->price*.10),
          "special" => $special
        )
      )     
    );
}else{
    http_response_code(503);
    echo json_encode(array("message" => "Error en el envio de datos",
    "TCP" => "Error 503 Service Unavaliable",
    "Significado" => "Incapacidad del servidor para procesar una petición "
  )
);
}
?>
