<?php
    session_start();
    require 'linkDB.php';
    // Создаем подключение
    $Connect = mysqli_connect($serverName, $userName, $password, $dBName);

    // Проверяем подключение
    if (!$Connect)
    {
        die("Ошибка подключения: " . mysqli_connect_error());
    }

    $userId = $_SESSION['userId'];
    $sql = "
        SELECT
            card.Id
            ,card.Picture
            ,card.Eng
            ,card.Rus
            ,CASE WHEN user.IdUser IS NOT NULL THEN 1 ELSE 0 END AS added
        FROM
            cardEngRus AS card
        LEFT JOIN userCardEngRus user ON card.Id = user.IdCardEngRus AND user.IdUser = '$userId'"; // SQL запрос
    $result = mysqli_query($Connect, $sql); // выполнение запроса
    $data = array(); // Создаем пустой массив для хранения данных

    if (mysqli_num_rows($result) > 0) 
    {
        while($row = mysqli_fetch_assoc($result)) // выводим данные из каждой строки
        {
            $data[] = array(
                'cardId' => $row['Id'],
                'linkToPicture' => $row['Picture'],
                'wordsInTheTargetLanguage' => $row['Eng'],
                'wordsInNativeLanguage' => $row['Rus'],
                'added' => $row['added']);
        }
    }
    $jsonData = json_encode($data); // Преобразуем массив в формат JSON
    echo $jsonData; // Отправляем JSON-данные в JavaScript
?>