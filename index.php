<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Тренажер Английской лексики</title>
    <link rel="stylesheet" href="style.css">
    <?php session_start() ?>
</head>
<body>
    <header id="header">
        <div id="header__logo">
            Логотип
        </div>
        <div id="header__search">
            <input type="search" placeholder="Поиск...">
            <button>
                Искать
            </button>
        </div>
        <a href="#" id="header__cards" class="enteredTab">
            Карточки
        </a>
        <a href="#" id="header__trains">
            Тренировка
        </a>
        <a href="#" id="header__loginRegistration">
            Вход / Регистрация
        </a>
        <a href="#" id="user" >
        </a>
    </header>
    <div id="formRegister">
        <h1>
            Регистрация
        </h1>
        <form action="registration.php" method="POST" onsubmit="return validateFormForRegister()">
            <label for="Name">
                Имя:
            </label>
            <input type="text" name="Name" id="nameRegister"> 
            <label for="Email">
                E-mail
            </label>
            <input type="email" name="Email" id="emailRegister">
            <label for="Password">
                Пароль:
            </label>
            <input type="password" name="Password" id="passwordRegister">
            <button type="submit">
                Регистрация
            </button>
        </form>
    </div>
    <div id="formEnter">
        <h1>
            Вход
        </h1>
        <form action="enter.php" method="POST" onsubmit="return validateFormForEnter()">
            <label for="Email">
                E-mail
            </label>
            <input type="email" name="Email" id="emaiInput">
            <label for="Password">
                Пароль:
            </label>
            <input type="password" name="Password" id="passwordInput">
            <button type="submit">
                Вход
            </button>
            <a href="#" id="createAccount">
                Создать аккаунт
            </a>
        </form>
    </div>
    <div id="Cards">
    </div>
    <script src="javaScript.js"></script>
</body>
</html>