const RUN_OUTLINE_ME = 'run_outline_me';
const OUTLINE_EXP = /https?:\/\/(www\.)?outline.com/g;

async function outlineMe() {
  const queryOptions = { active: true, currentWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);
  const tabURL = tab.url;

  if (tabURL.match(OUTLINE_EXP)) return;

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


