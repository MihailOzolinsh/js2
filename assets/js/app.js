'use strict';
const products = [
 {id: 1, title: 'Notebook', price: 1000},
 {id: 2, title: 'Mouse', price: 100},
 {id: 3, title: 'Keyboard', price: 250},
 {id: 4, title: 'Gamepad', price: 150},
];
const renderAll = (list, title, price) => {
 const productList = list.map(item => {return '<div class="product-item"><h3>' + item.title + '</h3><p>' + item.price + '</p></div>'}).join('');
 document.querySelector('.products').innerHTML = productList;
};
renderAll(products);
/* 
 Ответ на вопрос почему добавляются ',': 
  Они добавляются так как это массив map а у массива добавляется такое значение после каждого ключа.
 Решение этого вопроса:
  Его можно соединить с помощью join
   Было: const productList = list.map(item => renderProduct(item.title, item.price));
   Стало: const productList = list.map(item => renderProduct(item.title, item.price)).join('');
*/

/* 
 Как уменьшить код:
 Было: 
 'use strict';
 const products = [
  {id: 1, title: 'Notebook', price: 1000},
  {id: 2, title: 'Mouse', price: 100},
  {id: 3, title: 'Keyboard', price: 250},
  {id: 4, title: 'Gamepad', price: 150},
 ];
 const renderProduct = (title, price) => {
  return '<div class="product-item"><h3>' + title + '</h3><p>' + price + '</p></div>'
 };
 const renderCatalog = (list) => {
  const productList = list.map(item => renderProduct(item.title, item.price)).join('');
  document.querySelector('.products').innerHTML = productList;
 };
 renderCatalog(products);
 ----------------------------------------------------------------
 Стало:
 'use strict';
 const products = [
  {id: 1, title: 'Notebook', price: 1000},
  {id: 2, title: 'Mouse', price: 100},
  {id: 3, title: 'Keyboard', price: 250},
  {id: 4, title: 'Gamepad', price: 150},
 ];
 const renderAll = (list, title, price) => {
  const productList = list.map(item => {return '<div class="product-item"><h3>' + item.title + '</h3><p>' + item.price + '</p></div>'}).join('');
  document.querySelector('.products').innerHTML = productList;
 };
 renderAll(products);
*/ 