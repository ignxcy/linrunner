const cmdForm = document.getElementById("commandForm");

cmdForm.onsubmit = () => {
    const cmd = document.getElementById("cmd").value;

    const response = fetch(`https://linrun.sparkklol.repl.co/execute?cmd=${cmd}`)
    console.log(response.text)
}