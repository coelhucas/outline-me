const RUN_OUTLINE_ME = 'run_outline_me';

function outlineMe() {
  browser.tabs.query({active: true, windowId: browser.windows.WINDOW_ID_CURRENT})
    .then(tabs => browser.tabs.get(tabs[0].id))
    .then(tab => {
      const { url } = tab;
      browser.tabs.update({ url: `https://outline.com/${url}` });
  });
}

browser.browserAction.onClicked.addListener(() => {
  outlineMe();
});

browser.commands.onCommand.addListener(function (command) {
  if (command === RUN_OUTLINE_ME) {
    outlineMe();
  }
});

