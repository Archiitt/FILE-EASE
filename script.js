// Selects the textarea element and stores it in the `textarea` variable.
const textarea = document.querySelector("textarea");

// Selects the input element with class "file-name input" and stores it in `fileNameInput`.
const fileNameInput = document.querySelector(".file-name input");

// Selects the select menu element with class "save-as select" and stores it in `selectMenu`.
const selectMenu = document.querySelector(".save-as select");

// Selects the button element with class "save-btn" and stores it in `saveBtn`.
const saveBtn = document.querySelector(".save-btn");

// Attaches an event listener to the `selectMenu` (format selection menu)
selectMenu.addEventListener("change", () => {
  // Gets the text representing the selected format (e.g., ".txt", ".html") from the menu.
  const selectedFormat = selectMenu.options[selectMenu.selectedIndex].text;

  // Updates the text content of the `saveBtn` button to display the chosen format.
  saveBtn.innerText = `Save As ${selectedFormat.split(" ")[0]} File`;
});

// Attaches an event listener to the `saveBtn` button (save button)
saveBtn.addEventListener("click", () => {
  // Creates a Blob object containing the text from the `textarea` and the selected format type.
  const blob = new Blob([textarea.value], {type: selectMenu.value});

  // Generates a temporary URL for the Blob that the browser can use for downloading.
  const fileUrl = URL.createObjectURL(blob);

  // Creates a new anchor (`<a>`) element to act as a downloadable link.
  const link = document.createElement("a");

  // Sets the filename for the downloaded file based on the value in `fileNameInput`.
  link.download = fileNameInput.value;

  // Sets the link's URL (href) to the temporary URL for downloading the Blob.
  link.href = fileUrl;

  // Simulates a click on the link to initiate the download process in the browser.
  link.click();
});

