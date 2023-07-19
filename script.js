/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */
const button = document.querySelector(".forecast-btn");
const container = document.querySelector(".current-forecast");

button.addEventListener("click", function () {
  function makeMovieCard(title, getRandomIntInclusive) {

    const firstCard = document.querySelector(".forecasts");

    const firstPredictionTitle = document.createElement("h1");
    firstPredictionTitle.textContent = title;

    const firstProbability = document.createElement("p");
    firstProbability.textContent = getRandomIntInclusive(0, 100) + "%";

    function getRandomIntInclusive(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    firstCard.append(firstPredictionTitle, firstProbability);

    return firstCard;
  }

  const firstPrediction = makeMovieCard('Исполниться самая заветная мечта');
  firstCard.append(firstPrediction);

  firstPrediction.remove();

  const cardTemplate = document.querySelector("#forecast-item");

  function makeCardByTemplate(title, getRandomIntInclusive) {
    const myCard = cardTemplate.content.cloneNode(true);

    myCard.querySelector("h1").textContent = title;
    myCard.querySelector("p").textContent = getRandomIntInclusive;

    return myCard;
  }

  const secondPrediction = makeCardByTemplate('Выполнишь цели поставленные на год', getRandomIntInclusive);
  firstCard.append(secondPrediction);

  const thirdPrediction = makeMovieCard('Через год будешь на любимой работе');
  firstCard.append(thirdCard);

  const fourPrediction = makeMovieCard('Купишь родителям путевку на море');
  firstCard.append(fourCard);

  const fifthPrediction = makeMovieCard('Встретишь любовь всей своей жизни');
  firstCard.append(fifthCard);
});
/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
