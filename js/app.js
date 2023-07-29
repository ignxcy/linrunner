const cmdForm = document.getElementById("commandForm");

cmdForm.onsubmit = async (event) => {
  event.preventDefault();

  const cmd = document.getElementById("cmd").value;

  try {
    const response = await fetch(`https://linrun.sparkklol.repl.co/execute?cmd=${encodeURIComponent(cmd)}`);
    const responseData = await response.text();
    console.log(responseData);
  } catch (error) {
    console.error("Error:", error);
  }
};