const style = document.createElement('style');
style.type = 'text/css';
style.textContent = `
p {
  width: max-content;
  max-width: max-content;
}
div.comment-text {
  overflow-x: auto;
}`;

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

nowrap();
