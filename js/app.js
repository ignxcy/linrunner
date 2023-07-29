document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const cmdInput = document.getElementById("cmd");

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const command = cmdInput.value;
      const url = `https://linrun.sparkklol.repl.co/execute?cmd=${encodeURIComponent(command)}`;

      fetch(url)
        .then(response => response.text())
        .then(data => {
          // Do something with the response data if needed
          console.log(data);
        })
        .catch(error => {
          console.error("Error:", error);
        });
    });
  });