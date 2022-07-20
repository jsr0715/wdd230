//Display message when form has been sent:
function alertMessage() {
    if (document.querySelector("#contact-us-form").checkValidity()) {
      alert("Message sent!");
    }
  }