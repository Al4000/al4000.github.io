<?php
  if($_GET['country'] == 1)
    echo json_encode(array("1" => "Atlas", "2" => "Shrugged"));
  else if ($_GET['country'] == 2)
    echo json_encode(array("3" => "Brave", "4" => "New World"));
?>
