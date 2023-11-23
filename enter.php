<?php
    session_start();
    if($_SERVER['REQUEST_METHOD'] === 'POST')
    {
        $Connect = mysqli_connect('localhost', 'root', '', 'trainer');
        if(!$Connect)
        {
            die('Ошибка подключения: ' . mysqli_connect_error());
        }

        $email = $_POST['Email'];
        $password = $_POST['Password'];
        $email  = mysqli_real_escape_string($Connect, $email);
        $password  = mysqli_real_escape_string($Connect, $password);

        $sql = 'SELECT Name, Email, Password FROM users';
        $result = mysqli_query($Connect, $sql);
        if ($result)
        {
            $booleanEmail = false;
            $booleanPassword = false;
            while ($row = mysqli_fetch_assoc($result))
            {
                if($row['Email'] == $email)
                {
                    $booleanEmail = true;
                    if(password_verify($password, $row['Password']))
                    {
                        $booleanPassword = true;
                        $_SESSION['Name'] = $row['Name'];
                    }
                }
            }
            if($booleanEmail)
            {
                if($booleanPassword)
                {
                    $_SESSION['Email'] = $email;
                    $_SESSION['Password'] = $password;
                    header('Location: index.php');
                    exit;
                }
                else
                {
                    echo '<p style="text-align: center;">' . 'Не правильный пароль' . '</p>';
                }
            }
            else
            {
                echo '<p style="text-align: center;">' . 'Не правильный логин и пароль' . '</p>';
            }
        }
        else
        {
            echo 'Ошибка: ' . mysqli_error($conn);
        }
        mysqli_close($Connect);
    }
?>