export function scroller() {
  const scrollerContainer = document.querySelector(".section-scroll");

  scrollerContainer.innerHTML = `
  <div class="scroller selected"></div>
  <div class="scroller "></div>
  <div class="scroller "></div>
  <div class="scroller "></div>
  `;

  const body = document.body;
  const html = document.documentElement;

  let height = 0;
  let h = 0;

  const initiateHeights = () => {
    height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    h =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    console.log("heights were initialised:", height, h);
  };

  initiateHeights();
}
