const fadeInMixin = {
  props: {
    delay: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      fadeInStyle: {
        "animation-name": "fadeIn",
        "animation-duration": this.delay + "s",
        "animation-timing-function": "linear",
        "animation-iteration-count": 1,
        "animation-delay": "0s"
      }
    };
  }
  // computed: {
  //   fadeInStyle() {
  //     return {
  //       "animation-name": "fadeIn",
  //       "animation-duration": this.delay + "s",
  //       "animation-timing-function": "linear",
  //       "animation-iteration-count": 1,
  //       "animation-delay": "0s"
  //     };
  //   }
  // }
};

export default fadeInMixin;
