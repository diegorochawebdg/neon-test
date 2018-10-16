class NeonCarousel {
  constructor() {
    this.indicatorItem = document.querySelectorAll('[data-js="dot"]');
    this.carouselItem = document.querySelectorAll('[data-js="slide"]');
    this.indicatorIndex();
  }

  hasClass(el, elClass) {
    return (' ' + el.className + ' ').indexOf(' ' + elClass + ' ') > -1;
  }

  getItemStyle() {
    for (let i = 0; i < this.carouselItem.length; i++) {
      if (this.hasClass(this.carouselItem[i], 'active'))
        return window.getComputedStyle(this.carouselItem[i], null);
    }
  }

  itemStyles() {
    let itemMargin =
      parseInt(this.getItemStyle().marginLeft.replace('px', '')) +
      parseInt(this.getItemStyle().marginRight.replace('px', ''));
    let itemWidth = parseInt(this.getItemStyle().width.replace('px', ''));

    return itemMargin + itemWidth;
  }

  removeActive(el) {
    for (let i = 0; i < this.indicatorItem.length; i++) {
      el.classList.remove('active');
    }
  }

  indicatorIndex() {
    for (let i = 0; i < this.indicatorItem.length; i++) {
      let card = this.carouselItem[i];
      let indicator = this.indicatorItem[i];
      indicator.addEventListener('click', () => {
        for (let i = 0; i < this.indicatorItem.length; i++) {
          this.indicatorItem[i].classList.remove('active');
        }
        if (i === parseInt(card.getAttribute('data-carousel'))) {
          indicator.classList.add('active');
          document.querySelector('.carousel__wrapper').style.marginLeft =
            '-' + this.itemStyles() * i + 'px';
        }
      });
    }
  }
}

export default NeonCarousel;
