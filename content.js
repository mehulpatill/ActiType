console.log("Clipboard AutoTyper content script ready.");

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

function insertCharInInput(el, ch) {
  const start = el.selectionStart;
  const end = el.selectionEnd;
  el.setRangeText(ch, start, end, "end");
  el.dispatchEvent(new Event("input", { bubbles: true }));
}

function insertCharInContentEditable(el, ch) {
  el.focus();
  const sel = window.getSelection();
  if (!sel.rangeCount) return;
  const range = sel.getRangeAt(0);
  range.deleteContents();
  range.insertNode(document.createTextNode(ch));
  range.collapse(false);
  sel.removeAllRanges();
  sel.addRange(range);
  el.dispatchEvent(new Event("input", { bubbles: true }));
}

async function autoTypeFromClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    console.log("Clipboard AutoTyper: got text length", text.length);

    if (!text) {
      alert("Clipboard is empty!");
      return;
    }

    let el = document.activeElement;

    // fallback: first editable field
    if (!el || (!el.isContentEditable && !["INPUT", "TEXTAREA"].includes(el.tagName))) {
      el = document.querySelector("textarea, input[type=text], [contenteditable='true']");
      if (!el) {
        alert("No editable field found. Click inside a text field first.");
        return;
      }
    }

    const isInput = el.tagName === "TEXTAREA" ||
      (el.tagName === "INPUT" && ["text","search","email","url","tel","password",""].includes(el.type));
    const isEditable = el.isContentEditable;

    if (!isInput && !isEditable) {
      alert("Not an editable field. Click inside a text box.");
      return;
    }

    el.focus();

    for (let ch of text) {
      if (isInput) insertCharInInput(el, ch);
      else insertCharInContentEditable(el, ch);
      await sleep(50); // typing speed in ms
    }

    console.log("AutoType complete.");
  } catch (err) {
    console.error("Clipboard read failed:", err);
    alert("Clipboard read failed. Try copying text again.");
  }
}

// ALT+T shortcut
document.addEventListener("keydown", (e) => {
  if (e.altKey && e.key.toLowerCase() === "t") {
    e.preventDefault();
    autoTypeFromClipboard();
  }
});

// Right-click menu trigger
window.addEventListener("AutoTypeClipboardTrigger", () => {
  autoTypeFromClipboard();
});
