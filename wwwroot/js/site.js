// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const quoteElement = document.getElementById("quote-el");

async function getQuote() {
  const response = await fetch("https://api.quotable.io/quotes/random");
  const quote = await response.json();

  const quoteElement = document.getElementById("quote-el");
  quoteElement.innerHTML = `"${quote[0].content}" -${quote[0].author}`;
}
