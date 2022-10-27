const inputs = document.querySelectorAll("#otpInput input");

inputs.forEach(function (input, index) {
  input.addEventListener("input", function (event) {
    const inputValue = input.value;

    if (inputValue.length === 0) return;

    if (!Number.isInteger(Number(inputValue))) {
      input.select();
      alert(`${inputValue} n'est pas un chiffre`);
    } else {
      if (index < inputs.length - 1) {
        inputs[index + 1].select();
      } else {
        //const buttonSend = document.querySelector("#sendCode");
        //buttonSend.focus();
        let code = "";
        for (const input of inputs) {
          code += input.value;
        }

        alert(code);
      }
    }
  });
});
