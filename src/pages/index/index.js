//index.js
import { BasePage, bindPage } from '../../core/index';

export class Index extends BasePage {
  arr = [1, 2, 3];

  $$count(newval, oldval) {
    this.log('count changed', newval, oldval);
  }

  get arrLength() {
    console.log('getter', this);
    return this.data.arr.length;
  }

  log(name, newVal, oldVal) {
    console.log('watch', name, 'new:', newVal, 'old:', oldVal);
  }

  bindViewTap() {
    this.arr.push(1);
  }

  onLoad() {
    console.log('loaded', this);
  }
}

bindPage(Index);
