class NeonCarousel {
  constructor() {
    this.carouselItem = document.querySelectorAll('.expenses-list__list-item');
    this.indicatorItem = document.querySelectorAll(
      '.expenses-list__slider-dot'
    );
    let sliderItemWidth =
      document.getElementsByClassName('expenses-list__list-item')[0]
        .offsetWidth + 100;

    document.getElementsByClassName('expenses-list__list')[0].style.width =
      sliderItemWidth * this.carouselItem.length + 'px';
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

  indicatorIndex() {
    for (let i = 0; i < this.indicatorItem.length; i++) {
      let card = this.carouselItem[i];
      let indicator = this.indicatorItem[i];

      indicator.addEventListener('click', () => {
        Array.from(this.indicatorItem).map(i => i.classList.remove('active'));
        indicator.classList.add('active');
        document.querySelector('.expenses-list__list').style.marginLeft =
          '-' + 600 * i + 'px';
      });
    }
  }
}

export default NeonCarousel;
