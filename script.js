const forma = document.getElementById('form');

// Sis kods pārbauda formas laukus, kad lietotājs mēģina nosūtīt formu
forma.addEventListener('submit', function (event) {
    event.preventDefault(); // nospizot nosutit, nelauj izpildit nosutisanas funkciju ja ir kludas
    
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('message-error').textContent = '';

    // Uzliek parasto stilu laukiem, nonemot sarkano krasu.
    document.getElementById('name').style.borderColor = '#ccc';
    document.getElementById('name').style.outlineColor = 'transparent';
    document.getElementById('email').style.borderColor = '#ccc';
    document.getElementById('email').style.outlineColor = 'transparent';
    document.getElementById('message').style.borderColor = '#ccc';
    document.getElementById('message').style.outlineColor = 'transparent';

  // panem vertibas no formas laukiem
  const vards = document.getElementById('name').value;
  const epasts = document.getElementById('email').value;
  const zinojums = document.getElementById('message').value;

  // Mainigais kas parbauda vai viss ir pareizi aizpildits
  let isValid = true;

  // Parbauda vai vards ir aizpildits 
  if (vards === '') {
    document.getElementById('name-error').textContent = 'Vārdam ir jābūt aizpildītam.';
    document.getElementById('name').style.borderColor = '#ff3434';
    document.getElementById('name').style.outlineColor = '#ff343447';
    isValid = false;
  }

  // Parbauda vai epasts ir aizpildits
  if (epasts === '') {
    document.getElementById('email-error').textContent = 'Epastam ir jābūt aizpildītam.';
    document.getElementById('email').style.borderColor = '#ff3434';
    document.getElementById('email').style.outlineColor = '#ff343447';
    isValid = false;
  }

  // Parbauda vai zinojums ir aizpildits un vai tas ir pietiekami garš
  if (zinojums === '') { // 
    document.getElementById('message-error').textContent = 'Ziņojumam ir jābūt aizpildītam.';
    document.getElementById('message').style.borderColor = '#ff3434';
    document.getElementById('message').style.outlineColor = '#ff343447';
    isValid = false;
  } else if (zinojums.length < 10) {
    document.getElementById('message-error').textContent = 'Ziņojums nav pietiekami garš.';
    document.getElementById('message').style.borderColor = '#ff3434';
    document.getElementById('message').style.outlineColor = '#ff343447';
    isValid = false;
  }

  // Ja viss ir aizpildits pareizi, tad izpildas isValid = true un nosuta zinojumu un nodzes formas laukus
  if (isValid) {
    alert("Ziņojums ir nosūtīts veiksmīgi!");
    forma.reset(); // nodzest formas laukus
  }
});