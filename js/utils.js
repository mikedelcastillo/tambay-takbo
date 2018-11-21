// https://gist.github.com/gre/1650294

const utils = {
  easing(t){
    return 1+(--t)*t*t*t*t;
  },
  scrollTo(y, duration = 1){
    let scroll = window.scrollY;
    let dist = y - scroll;
    let fps = 60;
    let frames = fps * duration;

    for(let i = 0; i <= frames; i++){
      setTimeout(() => {
        let to = (scroll + dist * this.easing(i / frames));
        if(Math.round(y) == to){
          return false;
        }
        window.scrollTo(0, to);
      }, 1000 / fps * i * duration);
    }
  },
  getOffsetTop(el){
    let parent = el.parentElement;
    let top = el.offsetTop;
    while(parent){
      top += parent.offsetTop;
      parent = parent.parentElement;
    }
    return top;
  },

};

window.utils = utils;

module.exports = utils;
