function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "arshad.work99@gmail.com",
    Password: "NotToBeDisplayed",
    To: "arshadvasg@outlook.com",
    From: document.getElementById("Email").value,
    Subject:
      "New Mail from " + document.getElementById("Name").value + " -Portfolio-",
    Body: document.getElementById("Message").value,
  }).then((message) => alert(message));
}
