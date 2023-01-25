const resultNode = document.querySelector('#resultNode');

document.querySelector('#button').addEventListener('click',() => {
    const value1 = document.getElementsByTagName('input')[0].value;
    const value2 = document.getElementsByTagName('input')[1].value;
    if (value1 >= 100 && value2 >= 100 && value1 <= 300 && value2 <= 300)
        fetchRequest(`https://picsum.photos/${value1}/${value2}`);
    else
        resultNode.innerHTML = 'одно из чисел вне диапазона от 100 до 300'
    }
);
function fetchRequest (url){
    fetch(url)
        .then((response) => insert (response.url))
        .catch(() => { console.log('error') })
}

function insert (url){
    resultNode.innerHTML = `<img src=${url}>`;
}
