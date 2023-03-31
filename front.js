const style = document.createElement('style');
style.type = 'text/css';
style.textContent = `
p {
  width: max-content;
  max-width: 70vw;
}
div.comment-text {
  overflow-x: auto;
}
div.comment-text p {
  max-width: max-content;
}
`;

let wrap = false;

function nowrap() {
  document.head.append(style);
  wrap = true;
}

function undo_nowrap() {
  document.head.removeChild(style);
  wrap = false;
}

function toggle_wrap() {
  (wrap ? undo_nowrap : nowrap)();
}

function spy(request, sender) {
  if (request.type !== 'LAUNCHPAD-PRETTIER') {
    return;
  }
  if (request.message === 'toggle') {
    toggle_wrap();
  }
}

nowrap();
chrome.runtime.onMessage.addListener(spy);
