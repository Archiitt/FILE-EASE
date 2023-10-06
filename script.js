// Selecting the textarea element using querySelector and storing it in the variable textarea
const textarea = document.querySelector("textarea");

// Selecting the input element with class "file-name" and storing it in the variable fileNameInput
const fileNameInput = document.querySelector(".file-name input");

// Selecting the select menu element with class "save-as" and storing it in the variable selectMenu
const selectMenu = document.querySelector(".save-as select");

// Selecting the button element with class "save-btn" and storing it in the variable saveBtn
const saveBtn = document.querySelector(".save-btn");


// Adding an event listener for the "change" event on the selectMenu element
selectMenu.addEventListener("change", () => {
    
    // Getting the selected option's text from the selectMenu
    const selectedFormat = selectMenu.options[selectMenu.selectedIndex].text;
    
    // Updating the inner text of the saveBtn to display the selected format
    saveBtn.innerText = `Save As ${selectedFormat.split(" ")[0]} File`;
});


// Adding an event listener for the "click" event on the saveBtn element
saveBtn.addEventListener("click", () => {
    
    // Creating a Blob (binary large object) from the textarea value with the selected format
    const blob = new Blob([textarea.value], {type: selectMenu.value});
    
    // Creating a URL for the Blob to be used for downloading
    const fileUrl = URL.createObjectURL(blob);
    
    // Creating an anchor (link) element
    const link = document.createElement("a");
    
    // Setting the filename for the downloaded file
    link.download = fileNameInput.value;
    
    // Setting the URL of the link to the file URL
    link.href = fileUrl;
    
    // Triggering a click event on the link to initiate the download
    link.click();
});

