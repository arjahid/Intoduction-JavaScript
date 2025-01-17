const place=document.getElementById('places');
const li=document.createElement('li');
li.innerText='pahartoli bon'
place.appendChild(li);
const mainc=document.getElementById('main');
const section=document.createElement('section');
const h1=document.createElement('h1')
    h1.innerText="my food list"

section.appendChild(h1);
mainc.appendChild(section)
const ul=document.createElement('ul');
const li1=document.createElement('li')
li1.innerText="mango";
ul.appendChild(li1);
const li2=document.createElement('li')
li2.innerText="banana";
ul.appendChild(li2);
const li3=document.createElement('li')
li3.innerText="apple";
ul.appendChild(li3);
section.appendChild(ul)