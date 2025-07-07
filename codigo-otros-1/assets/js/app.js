const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

//ASYNC FUNCTION
 async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch (`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);

/*//ASYNC FUNCTION
async function displayUser(username) {
try {
    const response = await fetch(`${usersEndpoint}/${username}`);

$n.textContent = 'cargando...';
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
} catch(err){
    console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
  displayUser('stolinski').catch(handleError);;

}
}
*/



