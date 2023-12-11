<?php
    session_start();
    if($_SESSION['Name'] && $_SESSION['Email'])
    {
        require 'linkDB.php';

        // Создаем подключение
        $Connect = mysqli_connect($serverName, $userName, $password, $dBName);
        // Проверяем подключение
        if (!$Connect)
        {
            die("Ошибка подключения: " . mysqli_connect_error());
        }
        $idUser = $_SESSION['Id'];
        $idCardEngRus = $_POST['data'];
        $sql = "DELETE FROM userCardEngRus WHERE idCardEngRus = $idCardEngRus"; // SQL запрос
        $result = mysqli_query($Connect, $sql); // выполнение запроса
        // Закрытие соединения
        mysqli_close($Connect);
    }
?>