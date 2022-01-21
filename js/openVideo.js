const openVideo = () => {
    document.querySelector(".videoYoutube").style.display = " block";
    setTimeout(() => {
      document.querySelector(".videoYoutube .fon").style.opacity = "1";
      document.querySelector(
        ".videoYoutube .videoWithYoutube"
      ).style.opacity = "1";
      document.querySelector(".videoYoutube p").style.opacity = "1";
      document.querySelector(
        ".videoYoutube .videoWithYoutube"
      ).innerHTML = `<iframe src="https://player.vimeo.com/video/553796055?autoplay=1&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" autoplay=1 width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="PageSpeed.mp4"></iframe>`;
    }, 100);
  };
  const closeVideo = () => {
    document.querySelector(".videoYoutube").style.display = "none";
    setTimeout(() => {
      document.querySelector(".videoYoutube .fon").style.opacity = "0";
      document.querySelector(
        ".videoYoutube .videoWithYoutube"
      ).style.opacity = "0";
      document.querySelector(".videoYoutube p").style.opacity = "0";
      document.querySelector(
        ".videoYoutube .videoWithYoutube"
      ).innerHTML = ``;
    }, 100);
  };