const JOKE_CARD = document.querySelector(".joke-card");
const JOKES = document.querySelector(".jokes");

const RANDON_JOKE_URL = "https://official-joke-api.appspot.com/random_joke";

JOKE_CARD.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Обработка промисов с помощью async/await
  // Метод fetch возвращает Promise
  // когда мы используем await мы получаем обьект Response - дает общую информацию об ответе, такую как: url, ok, status. А также предоставляет
  // вам методы, для получения данных из body
  // Этот метод называется json()
  // По умолчанию fetch использует метод GET, соответственно его явно прописывать не нужно, Нужно только если вам нужны остальные методы
  const response = await fetch(RANDON_JOKE_URL, {
    method: "GET",
  });

  // Метод json() возвращает Promise и преобразует JSON в JS обьект, чтобы достать дынные из тела ответа используем await
  // В итоге в result в нашем случае у нас будет лежать ответ от сервера в виде JS обьекта
  const result = await response.json();

  if (response.ok === true) {
    // тут  пишем логику по успешному ответу, т.е когда промис имеет статус fulfilled
    const joke = `${result.setup} ${result.punchline}`;

    JOKES.textContent = joke;
  } else {
    // тут пишем логику по обработку ошибок, т.е когда промис имеет статус rejected
    alert("Some Network Error. Please try again");
  }

  // Обрабртка промисов с помощью then и catch
  //   response
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
});
