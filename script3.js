function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if (xhr.status != 200) {
            resultNode.innerHTML = `Статус ответа: ${xhr.status}`;
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };
    xhr.onerror = function() {
        resultNode.innerHTML = `Ошибка! Статус ответа: ${xhr.status}`;
    };
    xhr.send();
};

const resultNode = document.querySelector('#result');
const btnNode = document.querySelector('#button');

function displayResult(apiData) {
    let cards = '';
    apiData.forEach(item => {
        const cardBlock = `
      <div style="margin: 5px">
        <img style="width: 200px; height: 200px"
          src="${item.download_url}"
        >
      </div>
    `;
        cards = cards + cardBlock;
    });

    resultNode.innerHTML = cards;
}

btnNode.addEventListener('click', () => {
    const value = document.querySelector('#input').value;
    if (value >=1 && value<=10)
        useRequest(`https://picsum.photos/v2/list/?limit=${value}`, displayResult);
    else
        resultNode.innerHTML = 'число вне диапазона от 1 до 10';
})