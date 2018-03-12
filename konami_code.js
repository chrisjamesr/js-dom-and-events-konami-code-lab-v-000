const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let codeIndex = 0
  document.body.addEventListener('keydown', testSequence)

  function testSequence(e){
    const key = parseInt(e.which || e.detail);
    if (key === code[codeIndex]){
      codeIndex++;
    } if (codeIndex === code.length) {
      alert("Contra MF!");
      codeIndex = 0;
    }
  }
}

