<?php
    session_start();
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
    $name = $_SESSION['Name'];
    $sql = "
        SELECT
            cardEngRus.Picture
            ,cardEngRus.Eng
            ,cardEngRus.Rus
        FROM
            userCardEngRus
        JOIN user ON userCardEngRus.idUser = user.Id
        JOIN cardEngRus ON userCardEngRus.idCardEngRus = cardEngRus.id
        WHERE
            user.Name = '$name'"; // SQL запрос
    $result = mysqli_query($conn, $sql); // выполнение запроса
    $data = array(); // Создаем пустой массив для хранения данных

    if (mysqli_num_rows($result) > 0) 
    {
        while($row = mysqli_fetch_assoc($result)) // выводим данные из каждой строки
        {
            $data[] = array(
                'linkToPicture' => $row['Picture'],
                'wordsInTheTargetLanguage' => $row['Eng'],
                'wordsInNativeLanguage' => $row['Rus']);
        }
    }
    $jsonData = json_encode($data); // Преобразуем массив в формат JSON
    echo $jsonData; // Отправляем JSON-данные в JavaScript
?>