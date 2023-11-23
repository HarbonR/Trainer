<?php
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

$sql = "SELECT * FROM dictionary"; // SQL запрос
    $result = mysqli_query($conn, $sql); // выполнение запроса

    if (mysqli_num_rows($result) > 0) 
    {
        // выводим данные из каждой строки
        while($row = mysqli_fetch_assoc($result)) 
        {
            echo '
                <td class="cards">
                    <div class="picture">
                        <img src="' . htmlspecialchars($row["linkToPicture"]) . '" alt="' . htmlspecialchars($row["wordsInTheTargetLanguage"]) . '">
                    </div>
                    <div class="buttons">
                        <div class="button-add">
                            <img src="Pictures/button-add.svg" alt="add">
                        </div>
                        <div class="button-sound">
                            <img src="Pictures/button-sound.svg" alt="sound">
                        </div>
                    </div>
                    <div class="word">
                        ' . htmlspecialchars($row["wordsInTheTargetLanguage"]) . '
                    </div>
                    <div class="translate">
                        ' . htmlspecialchars($row["wordsInNativeLanguage"]) . '
                    </div>
                </td>
            ';
        }
    }
?>