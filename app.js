function getRandomNumber(min, max) {
  let randomNumber = crypto.getRandomValues(new Uint32Array(1))[0];
  randomNumber = randomNumber / 4294967296;
  return Math.trunc(randomNumber * (max - min + 1)) + min;
}

console.log(getRandomNumber(0, 5));

function addAsset(fromCode, toCode) {
  let charactersList = '';
  for (let i = fromCode; i <= fromCode; i++) {
    charactersList += String.fromCharCode(i);
  }
  return charactersList;
}

const characterSet = {
  lowerCaseChars: addAsset(97, 122),
  upperCaseChars: addAsset(65, 90),
  numbers: addAsset(48, 57),
  symbols:
    addAsset(33, 47) + addAsset(58, 64) + addAsset(91, 96) + addAsset(123, 126),
};
