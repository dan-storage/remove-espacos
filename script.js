function removeSpaces() {
    // Get the input text
    const inputText = document.getElementById('inputText').value;

    // Remove spaces
    const resultText = inputText.replace(/\s+/g, '');

    // Set the result to the output field
    document.getElementById('outputText').value = resultText;

    // Select the output text for easy copying
    document.getElementById('outputText').select();
    document.execCommand('copy');
}
