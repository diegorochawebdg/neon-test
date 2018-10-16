class ExcludeItem {
  constructor() {
    this.deleteItem = document.querySelectorAll('[data-js="delete"]');
    this.clickDelete();
  }

  clickDelete() {
    let cardItem = document.querySelectorAll('[data-js="item"]');
    Array.prototype.forEach.call(this.deleteItem, function(element, index) {
      element.addEventListener('click', function(e) {
        e.preventDefault();
        Array.prototype.forEach.call(cardItem, function(el, ind) {
          if (index === ind) {
            el.classList.add('remove');
            setTimeout(() => {
              el.parentNode.removeChild(el);
            }, 500);
          }
        });
        let item = document.querySelectorAll('[data-js="item"]');
        if (item.length <= 1) {
          for (let i = 0; i < item.length; i++) {
            item[i].parentNode.classList.add('empty');
            item[i].previousSibling.classList.remove('icon--hide');
          }
        }
      });
    });
  }
}

export default ExcludeItem;
