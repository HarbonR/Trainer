<?php
    session_start();
    if($_SESSION['Name'] && $_SESSION['Email'])
    {
        $data = array(); // Создаем пустой массив для хранения данных
        $data[] = $_SESSION['Name'];
        $data[] = $_SESSION['Email'];
        $jsonData = json_encode($data); // Преобразуем массив в формат JSON
        echo $jsonData; // Отправляем JSON-данные в JavaScript
    }
?>