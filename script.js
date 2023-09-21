var timerResult = "04:51:16";
var interval = setInterval(function () {
  var timer = timerResult.split(":");
  var hours = parseInt(timer[0], 10);
  var minutes = parseInt(timer[1], 10);
  var seconds = parseInt(timer[2], 10);
  --seconds;
  hours = minutes < 0 ? --hours : hours;
  minutes = seconds < 0 ? --minutes : minutes;
  minutes = minutes < 10 ? minutes : minutes;
  seconds = seconds < 0 ? 59 : seconds;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  $(".time__clock").html(hours + ":" + minutes + ":" + seconds);
  if (minutes < 0) clearInterval(interval);
  if (seconds <= 0 && minutes <= 0 && hours <= 0) clearInterval(interval);
  timerResult = hours + ":" + minutes + ":" + seconds;
}, 1000);

new Swiper(".image-slider", {
  thumbs: {
    swiper: {
      el: ".image-mini-slider",
      slidesPerView: 4,
    },
  },
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 15,
    shadowScale: 0.8,
  },
  loop: true,
  mousewheel: {
    sensititvity: 1,
  },
});

let deliveryRating = document.querySelector(".delivery__rating");
if (deliveryRating) {
  const ratings = document.querySelectorAll(".rating");
  if (ratings.length > 0) {
    initRatings();
  }

  function initRatings() {
    let ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index];
      initRating(rating);
    }

    function initRating(rating) {
      initRatingVars(rating);
      setRatingActiveWidht();
      if (rating.classList.contains("raitig_set")) {
        setRating(rating);
      }
    }

    function initRatingVars(rating) {
      ratingActive = rating.querySelector(".rating__active");
      ratingValue = rating.querySelector(".rating__value");
    }

    function setRatingActiveWidht(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index / 0.05;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function setRating(raiting) {
      const raitingItems = raiting.querySelectorAll(".rating__item");
      for (let index = 0; index < raitingItems.length; index++) {
        const raitingItem = raitingItems[index];
        raitingItem.addEventListener("mouseenter", function (e) {
          initRatingVars(raiting);
          setRatingActiveWidht(raitingItem.value);
        });
        raitingItem.addEventListener("mouseleave", function (e) {
          setRatingActiveWidht();
        });
        raitingItem.addEventListener("click", function (e) {
          initRatingVars(raiting);
          ratingValue.innerHTML = index + 1;
          setRatingActiveWidht();
        });
      }
    }
  }
}

let select = document.querySelector(".select");
if (select) {
  const multiSelect = () => {
    const elements = document.querySelectorAll(".select");
    elements.forEach((el) => {
      const choices = new Choices(el, {
        searchEnabled: false,
        itemSelectText: "",
      });
    });
  };
  multiSelect();
}
