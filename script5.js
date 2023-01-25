const resultNode = document.querySelector('#resultNode');
let stringLocal = localStorage.getItem('jsonObj');

if (stringLocal) displayResult(JSON.parse(stringLocal));       // Проверка данных в localStorage

document.querySelector('#button').addEventListener('click',() => {
    const value1 = document.getElementsByTagName('input')[0].value;
    const value2 = document.getElementsByTagName('input')[1].value;
    if (!checkRange(value1) && !checkRange(value2))
        resultNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
    else if (!checkRange(value1))
        resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
    else if (!checkRange(value2))
        resultNode.innerHTML = 'Лимит вне диапазона от 1 до 10';
    else useRequest(value1, value2)
});

function useRequest(value1, value2){                          // Запрос данных
    fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem('jsonObj', JSON.stringify(data));
            displayResult(data);
        }
    )
}
function checkRange (value){                                  // Проверка принадлежности к диапазону 1-10
    if (value <= 10 && value >=1) return true;
}
function displayResult(apiData) {                             // Отображает результаты
    let cards = '<ul style="list-style: none">';
    apiData.forEach(item => {
        const cardBlock = `
      <li>
        <img style="width: 200px; height: 200px"
          src="${item.download_url}">
      </li>
    `;
        cards += cardBlock;
    });
    cards += '</ul>';
    resultNode.innerHTML = cards;
}

