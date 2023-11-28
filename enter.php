<?php
    session_start();  // Инициализация сессии для сохранения данных между запросами
    if($_SERVER['REQUEST_METHOD'] === 'POST') // Проверка, что HTTP-запрос - это POST
    {
        $Connect = mysqli_connect('localhost', 'root', '', 'trainer'); // Создание соединения с базой данных MySQL
        if(!$Connect) // Проверка успешности соединения
        {
            die('Ошибка подключения: ' . mysqli_connect_error()); // Если соединиться не удалось, показать ошибку
        }

        $email = $_POST['Email'];  // Принимаем емейл из POST-запроса
        $password = $_POST['Password']; // Принимаем пароль из POST-запроса
        $email  = mysqli_real_escape_string($Connect, $email); // Экранирование специальных символов в строке для использования в SQL-запросе
        $password  = mysqli_real_escape_string($Connect, $password); // То же самое для пароля

        $sql = 'SELECT Id, Name, Email, Password FROM user'; // SQL-запрос на выборку имени, емейла и пароля из таблицы пользователей
        $result = mysqli_query($Connect, $sql); // Выполнение SQL-запроса
        if ($result) // Проверка на успешность выполнения запроса
        {
            $booleanEmail = false; // Флаг, найден ли емейл в базе
            $booleanPassword = false; // Флаг, верифицирован ли пароль
            while ($row = mysqli_fetch_assoc($result)) // Перебираем результаты запроса
            {
                if($row['Email'] == $email) // Проверка на совпадение емейла
                {
                    $booleanEmail = true; // Емейл найден
                    if(password_verify($password, $row['Password'])) // Проверка хеша пароля
                    {
                        $booleanPassword = true; // Пароль верифицирован
                        $_SESSION['Id'] = $row['Id']; // Сохраняем id пользователя в сессии
                        $_SESSION['Name'] = $row['Name']; // Сохраняем имя в сессии
                    }
                }
            }
            if($booleanEmail) // Если емейл найден
            {
                if($booleanPassword) // Если пароль верный
                {
                    $_SESSION['Email'] = $email; // Сохраняем емейл в сессии
                    header('Location: index.php');
                    exit; // Перенаправляем пользователя на другую страницу (строки закомментированы)
                }
                else
                {
                    echo '<p style="text-align: center;">' . 'Не правильный пароль' . '</p>'; // Сообщение о неверном пароле
                }
            }
            else
            {
                echo '<p style="text-align: center;">' . 'Не правильный логин и пароль' . '</p>'; // Сообщение о неверном логине и пароле
            }
        }
        else
        {
            echo 'Ошибка: ' . mysqli_error($conn); // Вывод ошибки при выполнении SQL-запроса
        }
        mysqli_close($Connect); // Закрываем соединение с базой данных
    }
?>