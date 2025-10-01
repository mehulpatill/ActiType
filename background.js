chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "autotype_clipboard",
    title: "AutoType (clipboard)",
    contexts: ["editable"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "autotype_clipboard") {
    if (!tab.url || tab.url.startsWith("chrome://") || tab.url.startsWith("about:")) {
      console.warn("AutoTyper: Cannot run on internal Chrome pages.");
      return;
    }
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        window.dispatchEvent(new CustomEvent("AutoTypeClipboardTrigger"));
      }
    });
  }
});
