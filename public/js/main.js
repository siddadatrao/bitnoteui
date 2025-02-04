function startBinaryAnimation() {
    const notebook = document.getElementById("notebook");
    if (!notebook) {
        console.error("Notebook element not found!");
        return;
    }

    const maxLineLength = 30;  // Reduced from 40
    const lineDelay = 1000;    // Delay between lines (ms)
    const typeSpeed = 50;      // Typing speed (ms)
    let currentLine = 0;
    const maxLines = 10;       // Reduced from 12

    addLine();

    function addLine() {
        if (currentLine >= maxLines) {
            notebook.removeChild(notebook.firstChild);
        } else {
            currentLine++;
        }

        const lineDiv = document.createElement("div");
        lineDiv.classList.add("line");
        notebook.appendChild(lineDiv);
        typeLine(lineDiv, "", 0);
    }

    function typeLine(lineElement, currentText, charCount) {
        if (charCount < maxLineLength) {
            const digit = Math.random() < 0.5 ? "0" : "1";
            currentText += digit;
            lineElement.innerHTML = currentText + '<span class="cursor"></span>';
            
            setTimeout(() => {
                typeLine(lineElement, currentText, charCount + 1);
            }, typeSpeed + Math.random() * 20);
        } else {
            lineElement.innerHTML = currentText;
            setTimeout(addLine, lineDelay);
        }
    }
}

function downloadApp() {
    // Direct link to v1.0.2-beta release
    const releaseUrl = 'https://github.com/siddadatrao/bitnote/releases/download/v1.0.2-beta/BitNote.dmg';
    window.location.href = releaseUrl;
}

document.addEventListener("DOMContentLoaded", startBinaryAnimation); 