window.addEventListener("DOMContentLoaded", () => {
  fetch("./quotes")
    .then((response) => response.json())
    .then((data) => displayQuotes(data.quotes))
    .catch((error) => console.error("Error fetching quotes:", error));
});

function displayQuotes(quotes) {
  const quotesContainer = document.getElementById("quotes-container");

  quotes.forEach((quote, index) => {
    const quoteElement = document.createElement("p");
    quoteElement.textContent = `${index + 1}. ${quote}`;
    quotesContainer.appendChild(quoteElement);
  });
}
