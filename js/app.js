const commandForm = document.getElementById('commandForm');
const cmdInput = document.getElementById('cmd');
const outputDiv = document.getElementById('output');

commandForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const cmd = cmdInput.value.trim();
    if (cmd === '') {
        outputDiv.innerHTML = 'Please enter a command.';
        return;
    }

    try {
        const response = await fetch(`http://linrun.sparkklol.repl.co/execute?cmd=${encodeURIComponent(cmd)}`);
        const data = await response.json();
        if (response.ok) {
            outputDiv.innerHTML = data.result;
        } else {
            outputDiv.innerHTML = data.error || 'An unknown error occurred.';
        }
    } catch (error) {
        console.error('Error:', error);
        outputDiv.innerHTML = 'An error occurred while processing the request.';
    }
});