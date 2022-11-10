async function verifierCode(email, code) {
  const response = await fetch("https://supinfo-otp.fly.dev/otp/code", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      code,
    }),
  });
  const resultat = await response.json();
  const message = resultat.message;

  return message === "granted";
}

async function verifierCodeEntre(email, code) {
  const accessIsGranted = await verifierCode(email, code);

  if (accessIsGranted) {
    document.body.innerHTML = "Access granted";
  } else {
    document.querySelector("#message").innerHTML =
      "Access denied: OTP incorrect";
  }
}

async function demanderCode(email) {
  const response = await fetch("https://supinfo-otp.fly.dev/otp/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  });
  return response.json();
}

const emailFormContainer = document.querySelector("#emailForm");
const emailForm = document.querySelector("#emailForm form");
const otpForm = document.querySelector("#otpForm");
const buttonSendOTPCode = document.querySelector("#sendMyOTPCode");
const emailInputCache = document.querySelector("#emailCache");

// Install evenement sur l'envoie de l'email
emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailElement = document.querySelector("#email");
  emailInputCache.value = emailElement.value;

  demanderCode(emailElement.value).then(({ message }) => {
    const text = document.createTextNode(message);
    document.querySelector("#showCode").appendChild(text);
  });

  emailForm.style.display = "none";
  otpForm.style.display = "block";
});

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
        let code = "";
        for (const input of inputs) {
          code += input.value;
        }

        const email = emailInputCache.value;
        verifierCodeEntre(email, code);
      }
    }
  });
});
