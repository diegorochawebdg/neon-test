class ExcludeItem {
  constructor() {
    this.deleteButtons = document.querySelectorAll('.expenses-list__internal-list-remove-item');
    this.deleteItem();
  }

  deleteItem() {
    Array.prototype.forEach.call(this.deleteButtons, (element, index) => {
      element.addEventListener('click', e => {
        e.preventDefault();
        element.parentNode.classList.add('remove');
        setTimeout(() => {
          element.parentNode.remove();
        }, 1000);
      });
    });
  }
}

export default ExcludeItem;
