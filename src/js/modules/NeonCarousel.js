class NeonCarousel {
  constructor() {
    //vars
    this.resizeTimeout;
    this.currentSlide = 0;
    this.carouselItem = document.querySelectorAll('.expenses-list__list-item');
    this.indicatorItem = document.querySelectorAll(
      '.expenses-list__slider-dot'
    );
    this.sliderItemWidth = window.getComputedStyle(this.carouselItem[0]).width;

    //add events
    this.setCarouselWidth();
    this.dots();
    //update the slider width on window resize
    window.addEventListener('resize', () => {
      window.clearTimeout(this.resizeTimeout);
      this.resizeTimeout = window.setTimeout(() => {
        this.setCarouselWidth();
        this.setCarouselMargin();
      }, 100);
    });
  }

  dots() {
    for (let i = 0; i < this.indicatorItem.length; i++) {
      let indicator = this.indicatorItem[i];
      indicator.addEventListener('click', () => {
        Array.from(this.indicatorItem).map(i => i.classList.remove('active'));
        indicator.classList.add('active');
        this.currentSlide = i;
        this.setCarouselMargin();
      });
    }
  }

  setCarouselWidth() {
    document.querySelector('.expenses-list__list').style.width = window.getComputedStyle(this.carouselItem[0]).width.split('px')[0] * this.carouselItem.length + 'px';
  }

  setCarouselMargin() {
    document.querySelector('.expenses-list__list').style.marginLeft = '-' + window.getComputedStyle(this.carouselItem[0]).width.split('px')[0] * this.currentSlide + 'px';
  }
}

export default NeonCarousel;
