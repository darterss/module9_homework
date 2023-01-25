const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector('list');
const nameNode = listNode.querySelectorAll('name');
const firstNode = listNode.querySelectorAll('first');
const secondNode = listNode.querySelectorAll('second');
const ageNode = listNode.querySelectorAll('age');
const profNode = listNode.querySelectorAll('prof');

const langAttr = [];
for (let i = 0; i < nameNode.length; i++) {
    langAttr[i] = nameNode[i].getAttribute ('lang');
}

const result = {list:[]};
for (let i = 0; i < nameNode.length; i++) {
    result.list.push(
        {
            name: firstNode[i].textContent + ' ' + secondNode[i].textContent,
            age: ageNode[i].textContent,
            prof: profNode[i].textContent,
            lang: langAttr[i]
        }
    )
}
console.log(result);
