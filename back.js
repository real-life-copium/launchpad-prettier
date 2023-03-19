function toggle_nowrap(tab) {
  const payload = {
    type: 'LAUNCHPAD-PRETTIER',
    message: 'toggle',
  };
  chrome.tabs.sendMessage(tab.id, payload);
}

// a shorthand
const dc = chrome.declarativeContent;
const rules = [{
  conditions: [
    new dc.PageStateMatcher({
      pageUrl: {
        schemes: ['https'],
        hostSuffix: 'bugs.launchpad.net',
        pathContains: '/+bug/',
      }
    })
  ],
  actions: [ new dc.ShowAction() ]
}];

function initialize() {
  chrome.action.disable();
  dc.onPageChanged.removeRules(undefined, function () {
    dc.onPageChanged.addRules(rules);
  });
}

chrome.action.onClicked.addListener(toggle_nowrap);
chrome.runtime.onInstalled.addListener(initialize);
