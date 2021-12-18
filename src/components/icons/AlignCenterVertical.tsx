import { defineComponent, SVGAttributes } from "vue";

  export const SvgAlignCenterVertical = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><polygon points="16 7 13 7 13 4 9 4 9 7 7 7 7 2 3 2 3 7 0 7 0 8 3 8 3 13 7 13 7 8 9 8 9 11 13 11 13 8 16 8 16 7" fill-rule="evenodd"/></svg>;
    },
  });