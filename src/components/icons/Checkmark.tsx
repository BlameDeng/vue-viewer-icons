import { defineComponent, SVGAttributes } from "vue";

  export const SvgCheckmark = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M6,14L0,8l2-2l4,4l8-8l2,2L6,14z"/></svg>;
    },
  });