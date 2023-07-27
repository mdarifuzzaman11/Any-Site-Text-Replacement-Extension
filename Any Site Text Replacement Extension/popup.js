document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchButton").addEventListener("click", function () {
      chrome.runtime.sendMessage({ action: "search" });
    });
  
    document.getElementById("replaceButton").addEventListener("click", function () {
      chrome.runtime.sendMessage({ action: "replace" });
    });
  });
  