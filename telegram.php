<?php

//! Full Access to another domain
// !!!!!!!для работы разкомментируй !!!!!!!!
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

// TOKEN
$token = "5076496335:AAE66iPy4oKdpw2XvkekYMY8gyelCdM51L4";

/*
  GET CHAT ID
  go to: https://api.telegram.org/bot5076496335:AAE66iPy4oKdpw2XvkekYMY8gyelCdM51L4/getUpdates,
  where "5076496335:AAE66iPy4oKdpw2XvkekYMY8gyelCdM51L4" is bot token (from @botfather)
*/

$chat_id = "-752584432";

// Grab js data
$_DATA = json_decode(file_get_contents('php://input'), true);

foreach($_DATA as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  die();
} else {
  echo "Error";die();
}
