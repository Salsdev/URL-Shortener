// Get references to HTML elements
let logUrl = document.getElementById("long");
let button = document.getElementById("btn");
let shortUrl = document.getElementById("short");
let copy = document.getElementById("copy");
const container = document.getElementById("container");

// Add event listener to the button
button.addEventListener("click", async function () {
  // Call the myUrl function asynchronously
  await myUrl();
  // Display the result container
  container.style.display = "block";
});

// Function to retrieve the shortened URL
async function myUrl() {
  // Get the value of the long URL input field
  let _rul = logUrl.value;
  // Fetch the shortened URL from the API
  var result = await fetch(`https://api.shrtco.de/v2/shorten?url=${_rul}`)
    .then((response) => response.json())
    .then((value) => {
      // Assign the shortened URL to the shortUrl input field
      shortUrl.value = value.result.short_link;
    })
    .catch((err) => {
      // Display an error message if the API request fails
      alert(err.message);
    });
}

// Add event listener to the copy button
copy.addEventListener("click", () => {
  // Copy the shortened URL to the clipboard
  navigator.clipboard.writeText(shortUrl.value);
  // Update the copy button text to indicate that the URL has been copied
  copy.innerHTML = "copied ";
  // Reset the copy button text after 1 second
  setTimeout(() => {
    copy.innerHTML = "copy";
  }, 1000);
});
