(function () {
  function setRem() {
    const baseWidth = 1920; // 设计稿宽度
    const baseFontSize = 10; // 1rem 对应 px (1920px 下)
    const clientWidth = document.documentElement.clientWidth; // 当前屏幕宽度
    const fontSize = (clientWidth / baseWidth) * baseFontSize;
    document.documentElement.style.fontSize = fontSize + 'px';
  }
  setRem();

  function setMobileRem() {
    const baseSize = 10; // 设定基准值（1rem = 100px）
    const designWidth = 750; // 设计稿宽度
    const scale = document.documentElement.clientWidth / designWidth;
    document.documentElement.style.fontSize = baseSize * scale + 'px';
  }
  
  window.addEventListener("resize", function () {
    console.log(123)
    if (window.innerWidth <= 768) {
      setMobileRem();
    } else {
      setRem();
    }
  });
  // window.addEventListener('resize', setRem); // 监听窗口变化
})();