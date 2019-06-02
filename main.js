function waitMilliSeconds(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function heavyProcess() {
  let result = 0;
  for (let i = 0; i < 3000000000; i++) {
    result += i;
  }
  return 0;
}

async function compute() {
  return 1 + await heavyProcess();
}

function fetchLinkData() {
  const url = "https://randomuser.me/api";
  fetch(url, { mode: "cors" }).then(
                                  (response) => response.text()
                              ).then(
                                  (text) => {
                                  const element = document.querySelector("#ajax-result");
                                  element.textContent = text;
                                  console.log(`result: ${text}`);
                                }
                              );
}

window.onload = () => {

  //
  // PromiseとDOM操作の練習
  //
  function changeTextContent() {
    const element = document.querySelector("#firing-range");
    element.textContent = "JavaScriptによって中身が変更";
  }
  waitMilliSeconds(2000).then(changeTextContent);

  //
  // async、awaitの練習
  //
  compute().then((res) => alert(res));

  //
  // fetch APIの練習
  //
  fetchLinkData();
};

