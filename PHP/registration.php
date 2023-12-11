<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST') // Проверяем является ли метод запроса POST
    {
        require 'linkDB.php'; // Шаблон данных для подключения к БД

        // Подключение к базе данных
        $Connect = mysqli_connect($serverName, $userName, $password, $dBName);

        // Проверка соединения
        if (!$Connect)
        {
            die("Ошибка подключения: " . mysqli_connect_error());
        }

        // Получение данных из формы
        $userName = $_POST['userName']; // Записываем в переменную $userName данные из массива запроса $_POST['userName']
        $userEmail = $_POST['userEmail']; // Записываем в переменную $userEmail данные из массива запроса $_POST['userEmail']
        $userEmail = mb_strtolower($userEmail, 'UTF-8'); // Переводим email в нижний регистр
        $userPassword = $_POST['userPassword']; // Записываем в переменную $userPassword данные из массива запроса $_POST['userPassword']

        $userName = mysqli_real_escape_string($Connect, $userName); // SQL-инъекции. Экранируем специальные символы в строке
        $userEmail  = mysqli_real_escape_string($Connect, $userEmail);  // SQL-инъекции. Экранируем специальные символы в строке
        $userPassword  = mysqli_real_escape_string($Connect, $userPassword);  // SQL-инъекции. Экранируем специальные символы в строке
        $userPassword = password_hash($password, PASSWORD_DEFAULT); // Хэшируем пароль

        // Подготовка и выполнение SQL-запроса
        $sql = "INSERT INTO user (Name, Email, Password) VALUES ('$userName', '$userEmail', '$userPassword')";

        if (mysqli_query($Connect, $sql)) // Проверяем, успешно ли выполнен SQL запрос
        {
            header('Location: ../index.php'); // Перенаправляем на главную страницу
            exit;
        }
        else
        {
            echo 'Ошибка: ' . mysqli_error($Connect);
        }

        // Закрытие соединения
        mysqli_close($Connect);
    }
?>