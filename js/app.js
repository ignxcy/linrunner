document.getElementById("commandForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const command = document.getElementById("cmd").value;
    const url = `https://linrun.sparkklol.repl.co/execute?cmd=${command}`;

    fetch(url)
      .then(response => response.text())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });