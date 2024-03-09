// Selects the HTML element with the `<textarea>` tag and stores it in the `textarea` variable.
// This element allows the user to enter text content.
const textarea = document.querySelector("textarea");

// Selects the first HTML `<input>` element that's a descendant of an element with class "file-name" 
// and stores it in the `fileNameInput` variable. This input field lets the user specify the desired filename.
const fileNameInput = document.querySelector(".file-name input");

// Selects the first HTML `<select>` element that's a descendant of an element with class "save-as" 
// and stores it in the `selectMenu` variable. This dropdown menu allows the user to choose the file format.
const selectMenu = document.querySelector(".save-as select");

// Selects the first HTML `<button>` element with class "save-btn" and stores it in the `saveBtn` variable.
// Clicking this button triggers the process of saving the content as a file.
const saveBtn = document.querySelector(".save-btn");

// Attaches an event listener to the `selectMenu` element. This means whenever the user changes the selected format 
// in the dropdown menu, the code within the curly braces (`=> { ... }`) will be executed.
selectMenu.addEventListener("change", () => {
  // Retrieves the text representing the currently selected format (e.g., ".txt", ".html") from the `selectMenu`.
  // This involves accessing the `options` property, which is an array containing all the options in the menu, 
  // then using `selectedIndex` to get the index of the currently selected option, and finally using that index 
  // to access the corresponding text content within the options array.
  const selectedFormat = selectMenu.options[selectMenu.selectedIndex].text;

  // Updates the inner text content of the `saveBtn` button to display "Save As" followed by the chosen format 
  // (with any leading spaces removed using `split(" ")[0]`) and "File". This provides the user with a clear 
  // indication of the selected format when saving the content.
  saveBtn.innerText = `Save As ${selectedFormat.split(" ")[0]} File`;
});

// Attaches an event listener to the `saveBtn` element. This means whenever the user clicks the save button, 
// the code within the curly braces (`=> { ... }`) will be executed.
saveBtn.addEventListener("click", () => {
  // Creates a Blob object, which represents a blob of binary data. In this case, the data is the text content 
  // retrieved from the `textarea` element. The second argument in the `Blob` constructor is an object specifying 
  // the type of the data, which is set to the selected format type retrieved from the `selectMenu`.
  const blob = new Blob([textarea.value], {type: selectMenu.value});

  // Generates a temporary URL (Uniform Resource Locator) for the created Blob object using the `URL.createObjectURL` method.
  // This URL allows the browser to access and download the Blob's content. It's important to note that this URL 
  // is temporary and will become invalid after the download is complete or the URL is revoked.
  const fileUrl = URL.createObjectURL(blob);

  // Creates a new HTML anchor element (`<a>`) using `document.createElement("a")`. This element represents a link 
  // that can be used to download the file.
  const link = document.createElement("a");

  // Sets the `download` attribute of the link element to the filename specified in the `fileNameInput` element.
  // This attribute determines the filename that will be used when saving the downloaded content.
  link.download = fileNameInput.value;

  // Sets the `href` (hyperlink reference) attribute of the link element to the temporary URL (`fileUrl`) generated 
  // earlier. This tells the browser where to download the content from when the link is clicked.
  link.href = fileUrl;

  // Simulates a click event on the newly created link element using `link.click()`. This triggers the browser's 
  // download functionality, prompting the user to save the content as a file with the specified filename and format.
  link.click();
});
