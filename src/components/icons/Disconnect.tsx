import { defineComponent, SVGAttributes } from "vue";

  export const SvgDisconnect = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0M1.5 8A6.46 6.46 0 0 1 2.91 4L12 13.09A6.49 6.49 0 0 1 1.5 8m11.59 4L4 2.91A6.49 6.49 0 0 1 13.09 12"/></svg>;
    },
  });