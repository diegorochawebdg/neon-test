import ExcludeItem from './modules/ExcludeItem';
import NeonCarousel from './modules/NeonCarousel';

class Main {
  constructor() {
    new ExcludeItem();
    new NeonCarousel();
  }
}

window.addEventListener('load', function() {
  new Main();
});
