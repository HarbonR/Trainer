<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST')
    {

        // Подключение к базе данных
        $conn = mysqli_connect("localhost", "root", "", "trainer");

        // Проверка соединения
        if (!$conn)
        {
            die("Ошибка подключения: " . mysqli_connect_error());
        }

        // Получение данных из формы
        $name = $_POST['Name'];
        $email = $_POST['Email'];
        $password = $_POST['Password'];

        $name = mysqli_real_escape_string($conn, $name);
        $email  = mysqli_real_escape_string($conn, $email);
        $password  = mysqli_real_escape_string($conn, $password);
        $password = password_hash($password, PASSWORD_DEFAULT);

        // Подготовка и выполнение SQL-запроса
        $sql = "INSERT INTO user (Name, Email, Password) VALUES ('$name', '$email', '$password')";

        if (mysqli_query($conn, $sql))
        {
            header('Location: index.php');
            exit;
        }
        else
        {
            echo 'Ошибка: ' . mysqli_error($conn);
        }

        // Закрытие соединения
        mysqli_close($conn);
    }
?>