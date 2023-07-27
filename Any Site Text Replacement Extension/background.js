chrome.commands.onCommand.addListener(function (command) {
    if (command === "search_replace") {
      chrome.tabs.executeScript({ file: "content.js" });
    }
  });
  
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "search") {
      // Add your logic for searching text on webpages here
      // For example, you can use chrome.tabs.query and chrome.tabs.sendMessage
      // to interact with the content script (content.js).
      // For demonstration purposes, let's just log a message to the console.
      console.log("Search action triggered.");
    } else if (message.action === "replace") {
      // Add your logic for replacing text on webpages here
      // For example, you can use chrome.tabs.query and chrome.tabs.sendMessage
      // to interact with the content script (content.js).
      // For demonstration purposes, let's just log a message to the console.
      console.log("Replace action triggered.");
    }
  });
  