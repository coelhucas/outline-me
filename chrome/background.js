const RUN_OUTLINE_ME = 'run_outline_me';

async function outlineMe() {
  const queryOptions = { active: true, currentWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);
  const tabURL = tab.url;
  chrome.tabs.update({ url: `https://outline.com/${tabURL}` });
}

chrome.action.onClicked.addListener(() => {
  outlineMe()
});

chrome.commands.onCommand.addListener((command) => {
  if (command === RUN_OUTLINE_ME) {
    outlineMe();
  }
});


