//==================================================
// Создаем функцию для создания карточки
function createCard(id, linkToPicture, wordsInTheTargetLanguage, wordsInNativeLanguage)
{
    // Создаем элементы для карточки
    let card = document.createElement("div");
    card.className = "cards";
    card.id = "card: " + id;
  
    let picture = document.createElement("div");
    picture.className = "picture";
    let img = document.createElement("img");
    img.src = linkToPicture;
    img.alt = wordsInTheTargetLanguage;
    picture.appendChild(img);
  
    let buttons = document.createElement("div");
    buttons.className = "buttons";
    let buttonAdd = document.createElement("div");
    buttonAdd.className = "button-add";
    buttonAdd.onclick = function()
    {
        var xhr = new XMLHttpRequest(); // Создаем новый объект XMLHTTPrequest
        xhr.open("POST", "PHP/addCard.php", true); 
        // Отправляем запрос на сервер
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // Устанавливаем заголовок Content-Type
        xhr.send("data=" + encodeURIComponent(id));
    }
    let imgAdd = document.createElement("img");
    imgAdd.src = "Pictures/button-add.svg";
    imgAdd.alt = "add";
    buttonAdd.appendChild(imgAdd);
    let buttonSound = document.createElement("div");
    buttonSound.className = "button-sound";
    let imgSound = document.createElement("img");
    imgSound.src = "Pictures/button-sound.svg";
    imgSound.alt = "sound";
    buttonSound.appendChild(imgSound);
    buttons.appendChild(buttonAdd);
    buttons.appendChild(buttonSound);
  
    let word = document.createElement("div");
    word.className = "word";
    word.textContent = wordsInTheTargetLanguage;
  
    let translate = document.createElement("div");
    translate.className = "translate";
    translate.textContent = wordsInNativeLanguage;
  
    // Добавляем элементы карточки внутрь основного элемента
    card.appendChild(picture);
    card.appendChild(buttons);
    card.appendChild(word);
    card.appendChild(translate);
  
    // Возвращаем созданную карточку
    return card;
  }
//--------------------------------------------------
// Функция для отображения карточек
function getCards(path)
{
    // Получение данных о карточках
    let cardsContainer = document.getElementById("Cards"); // Получаем элемент с ID "Cards"
    let xhrCards = new XMLHttpRequest(); // Создаем новый объект XMLHttpRequest
    //--------------------------------------------------
    xhrCards.onreadystatechange = function() // Устанавливаем функцию, которая будет вызываться при изменении состояния объекта `xhr`
    {
        if (xhrCards.readyState === 4 && xhrCards.status === 200) // Проверяем, что запрос завершен и успешен
        {
            let jsonData = JSON.parse(xhrCards.responseText); // Разбираем JSON-данные

            cardsContainer.innerHTML = ""; // Очищаем контейнер перед добавлением новых карточек

            // Создаем карточки и добавляем их в контейнер
            for (let i = 0; i < jsonData.length; i++)
            {
                let cardData = jsonData[i];
                let card = createCard(cardData.id, cardData.linkToPicture, cardData.wordsInTheTargetLanguage, cardData.wordsInNativeLanguage);
                cardsContainer.appendChild(card);
            }
        }
    };
    xhrCards.open("POST", path); // Открываем соединение с сервером с помощью метода "POST" и адреса "cards.php"
    xhrCards.send(); // Отправляем запрос на сервер
    //--------------------------------------------------
    // Стилизуем контейнер
    cardsContainer.style.maxWidth = "1200px";
    cardsContainer.style.margin = "20px auto 0 auto";
    cardsContainer.style.display = "flex";
    cardsContainer.style.justifyContent = "space-around";
    cardsContainer.style.flexWrap = "wrap";
}
//==================================================