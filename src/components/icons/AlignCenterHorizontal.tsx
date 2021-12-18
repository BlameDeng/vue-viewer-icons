import { defineComponent, SVGAttributes } from "vue";

  export const SvgAlignCenterHorizontal = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><polygon points="13 9 8 9 8 7 11 7 11 3 8 3 8 0 7 0 7 3 4 3 4 7 7 7 7 9 2 9 2 13 7 13 7 16 8 16 8 13 13 13 13 9" fill-rule="evenodd"/></svg>;
    },
  });