const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //Falta un punto (observación 1)
const $b = document.querySelector('.blog'); //Se cambia '#' por un '.' (observación 2)
const $l = document.querySelector('.location');//no existe esta clase en el html(observación 3)

async function displayUser(username) {//se agrega async al inicio de la function (observación 4)
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data= await response.json();// Se agrego esta linea (observación 5)
  console.log(data);
  $n.textContent = data.name; //Cambio de formato, de una 'template literals' por solo la variable
  $b.textContent = data.blog;
  $l.textContent = data.location;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;//Falto colocar '$' al inicio y ';' al final
}

displayUser('stolinski').catch(handleError);

/*FUNCIONAMIENTO
Es este archivo funciona, estableciendo una conexión con una API de git hub, la cual ingresa a los usuarios.
Se creo una funcion asincrona en la cual se espera un resultado, pero mientras lo encuentra muestra en el html a traves de la manipulación del DOM, la leyenda de 'Cargando...'
Una vez terminada la espera, hay dos opciones: una donde devuelve los resultados obtenidos y la segunda donde muestra un error en caso de que el objeto no se encuentre.
*/

/*  OBSERVACIONES

1. Para indicar que es una clase, se necesita colocar un punto al inicio del nombre
2. blog es una clase y no un id. Por lo tanto, se debe colocar un punto en lugar de '#'
3. Como no existe una clase llamada 'location', entonces se crea dentro del html
4. Se agrega 'async' al inicio de la función, ya que palabra reservada 'await' es utlizada en funciones asincronas, como lo es la función displayUser 
5. La constante 'data' no esta definida, pero se agrega para convertir la respuesta a un objeto JSON

*/