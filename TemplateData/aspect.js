(function () {
  const MIN_ASPECT = 16 / 9;

  function resizeUnity() {
    const container = document.getElementById("unity-container");
    if (!container) return;

    let w = window.innerWidth;
    let h = window.innerHeight;

    if (w / h < MIN_ASPECT) {
      h = w / MIN_ASPECT;
    }

    container.style.width = w + "px";
    container.style.height = h + "px";
  }

  window.addEventListener("resize", resizeUnity);
  window.addEventListener("load", resizeUnity);
})();
