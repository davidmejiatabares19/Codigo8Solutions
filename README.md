# Código8 Solutions

Abre `index.html`. Para activar el envío, crea una clave pública gratuita en Web3Forms y colócala en `config/email-config.js`. Sin clave, el formulario usa mailto. Reemplaza el dominio en SEO antes de publicar.



código de web3forms

b808cf43-db35-4c0c-b302-7f9044aa082c



ejemplo HTML:

<form action="https://api.web3forms.com/submit" method="POST">

&#x20; <input type="hidden" name="access\_key" value="b808cf43-db35-4c0c-b302-7f9044aa082c">

&#x20; <input type="text" name="name" required>

&#x20; <input type="email" name="email" required>

&#x20; <textarea name="message" required></textarea>

&#x20; <button type="submit">Submit</button>

</form>



ejemplo javascript:



const form = document.getElementById('form');

const submitBtn = form.querySelector('button\[type="submit"]');



form.addEventListener('submit', async (e) => {

&#x20;   e.preventDefault();



&#x20;   const formData = new FormData(form);

&#x20;   formData.append("access\_key", "b808cf43-db35-4c0c-b302-7f9044aa082c");



&#x20;   const originalText = submitBtn.textContent;



&#x20;   submitBtn.textContent = "Sending...";

&#x20;   submitBtn.disabled = true;



&#x20;   try {

&#x20;       const response = await fetch("https://api.web3forms.com/submit", {

&#x20;           method: "POST",

&#x20;           body: formData

&#x20;       });



&#x20;       const data = await response.json();



&#x20;       if (response.ok) {

&#x20;           alert("Success! Your message has been sent.");

&#x20;           form.reset();

&#x20;       } else {

&#x20;           alert("Error: " + data.message);

&#x20;       }



&#x20;   } catch (error) {

&#x20;       alert("Something went wrong. Please try again.");

&#x20;   } finally {

&#x20;       submitBtn.textContent = originalText;

&#x20;       submitBtn.disabled = false;

&#x20;   }

});







