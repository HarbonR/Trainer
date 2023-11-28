<?php
    session_start();
    if($_SESSION['Name'] && $_SESSION['Email'])
    {
        $servername = "localhost"; // имя сервера БД
        $username = "root"; // имя пользователя БД
        $password = ""; // пароль пользователя БД
        $dbname = "trainer"; // имя БД
        // Создаем подключение
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Проверяем подключение
        if (!$conn)
        {
            die("Ошибка подключения: " . mysqli_connect_error());
        }
        $idUser = $_SESSION['Id'];
        $idCardEngRus = $_POST['data'];
        $sql = "INSERT INTO userCardEngRus (idUser, idCardEngRus) VALUES ('$idUser', '$idCardEngRus')"; // SQL запрос
        $result = mysqli_query($conn, $sql); // выполнение запроса
        // Закрытие соединения
        mysqli_close($conn);
    }
?>