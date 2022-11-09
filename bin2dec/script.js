function logSubmit(event) {
  let strBin = input.value;

  let positions = [];

  for (let i = strBin.length - 1; i >= 0; i--) {
    positions.push(i);
  }

  console.log(positions);

  let soma = 0;

  for (let i = 0; i < strBin.length; i++) {
    let actualValue = parseInt(strBin[i]);
    if (actualValue != 0 && actualValue != 1) {
      throw new Error(
        `O número ${actualValue} não é válido para números binários`
      );
    } else {
      soma += actualValue * 2 ** positions[i];
    }
  }
  phrase.textContent = soma;
  event.preventDefault();
}

const form = document.getElementById("form");
const input = document.getElementById("input");
const phrase = document.getElementById("phrase");
form.addEventListener("submit", logSubmit);
