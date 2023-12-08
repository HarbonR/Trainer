<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Тренажер Английской лексики</title>
    <link rel="stylesheet" href="Style/style.css">
    <?php session_start() ?>
</head>
<body>
    <header>
        <div id="header__container">
            <div id="header__logo">
                Логотип
            </div>
            <div id="burger">
                <img src="Pictures/burger.svg" alt="">
            </div>
            <div id="header">
                <a href="#" id="header__cards" class="enteredTab">
                    Карточки
                </a>    
                <a href="#" id="header__trains">
                    Тренировка
                </a>
                <a href="#" id="header__loginRegistration">
                    Вход / Регистрация
                </a>
                <a href="#" id="user" style="display: none;">
                </a>
            </div>
        </div>
    </header>
    <div id="modal-window">
        <div id="formRegister">
            <h1>
                Регистрация
            </h1>
            <form action="PHP/registration.php" method="POST" onsubmit="return validateFormForRegister()">
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
                <button type="submit" class="button__form">
                    Регистрация
                </button>
            </form>
        </div>
        <div id="formEnter">
            <h1>
                Вход
            </h1>
            <form action="PHP/enter.php" method="POST" onsubmit="return validateFormForEnter()">
                <label for="Email">
                    E-mail
                </label>
                <input type="email" name="Email" id="emailInput">
                <label for="Password">
                    Пароль:
                </label>
                <input type="password" name="Password" id="passwordInput">
                <button type="submit" class="button__form">
                    Вход
                </button>
                <a href="#" id="createAccount">
                    Создать аккаунт
                </a>
            </form>
        </div>
    </div>
    <div id="user__data" style="display: none;">
        <a href="#" id="myDictionary" class="enteredTab">
            Мой словарь
        </a>
        <a href="#" id="myAchievements">
            Мои достижения
        </a>
        <a href="#">
            Статистика
        </a>
        <a href="#" id="exit">
            Выход
        </a>
    </div>
    <div id="search">
        <div id="search-container">
            <input type="search" placeholder="Поиск...">
            <button>
                Искать
            </button>
        </div>
    </div>
    <div id="Cards">
    </div>
    <script src="JS/switchTabs.js"></script>
    <script src="JS/userAuthentication.js"></script>
    <script src="JS/workingWithCards.js"></script>
</body>
</html>