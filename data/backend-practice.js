const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  //This will not be undefined
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();

