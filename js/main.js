var swiper=new Swiper ('.swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: {
        releaseOnEdges: true,
    },
    touchReleaseOnEdges: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.header__button',
    },
});

initCarousel('historyBlockSlider__climb');
initCarousel('historyBlockSlider__dipping');

function initCarousel(id) {
    var currentNumber = 1;
    var parentElement = document.getElementById(id);

    var sliderItems = parentElement.getElementsByClassName('historyBlock__sliderItem');

    var activeNumberElement = parentElement.getElementsByClassName('historyBlockSlider__sliderActiveNumber')[0];
    var slidersQuantityElement = parentElement.getElementsByClassName('historyBlockSlider__slidersQuantity')[0];

    var arrowPrevElement = parentElement.getElementsByClassName('historyBlock__sliderArrowPrev')[0];
    var arrowNextElement = parentElement.getElementsByClassName('historyBlock__sliderArrowNext')[0];

    slidersQuantityElement.innerHTML = setOneFigure(sliderItems.length);

    //TODO: use slide event and get current index
    arrowPrevElement.addEventListener('click', function () {
        if (currentNumber > 1) {
            currentNumber--;
        } else {
            currentNumber = sliderItems.length;
        }
        activeNumberElement.innerHTML = setOneFigure(currentNumber)
    });

    arrowNextElement.addEventListener('click', function () {
        if (currentNumber < sliderItems.length) {
            currentNumber++;
        } else {
            currentNumber = 1;
        }
        activeNumberElement.innerHTML = setOneFigure(currentNumber)
    });
}

function setOneFigure(number) {
    var oneFigureString;
    if (number < 10) {
        oneFigureString = '0' + number;
        return oneFigureString;
    } else {
        return number;
    }
}