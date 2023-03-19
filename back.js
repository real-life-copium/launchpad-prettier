function toggle_nowrap(tab) {
  const payload = {
    type: 'LAUNCHPAD-PRETTIER',
    message: 'toggle',
  };
  chrome.tabs.sendMessage(tab.id, payload);
}

chrome.action.onClicked.addListener(toggle_nowrap);
