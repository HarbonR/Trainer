<?php
    session_start();
    if($_SESSION['userEmail'])
    {
        require 'linkDB.php';

        // Создаем подключение
        $Connect = mysqli_connect($serverName, $userName, $password, $dBName);
        // Проверяем подключение
        if (!$Connect)
        {
            die("Ошибка подключения: " . mysqli_connect_error());
        }
        $userId = $_SESSION['userId'];
        $cardId = $_POST['cardId'];
        $sql = "INSERT INTO userCardEngRus (IdUser, IdCardEngRus, Train) VALUES ('$userId', '$cardId', 0)"; // SQL запрос
        $result = mysqli_query($Connect, $sql); // выполнение запроса
        // Закрытие соединения
        mysqli_close($Connect);
    }
?>