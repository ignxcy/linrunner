document.getElementById('commandForm').addEventListener('submit', function(event) {
    event.preventDefault();
    executeCommand();
});

function executeCommand() {
    const cmd = document.getElementById('cmd').value;

    fetch('http://linrun.sparkklol.repl.co/execute?cmd=' + encodeURIComponent(cmd))
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerHTML = data.result;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('output').innerHTML = 'An error occurred.';
        });
}