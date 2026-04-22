(function () {
  const ASPECT = 16 / 9;
  const HEIGHT_RATIO = 0.85;

  function resizeUnity() {
    const container = document.getElementById("unity-container");
    if (!container) return;

    const maxW = window.innerWidth;
    const baseH = window.innerHeight * HEIGHT_RATIO;

    let h = baseH;
    let w = h * ASPECT;

    if (w > maxW) {
      w = maxW;
      h = w / ASPECT;
    }

    container.style.width = w + "px";
    container.style.height = h + "px";
    container.style.margin = "0 auto";
  }

  window.addEventListener("resize", resizeUnity);
  window.addEventListener("load", resizeUnity);
})();
