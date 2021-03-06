import { defineComponent, SVGAttributes } from "vue";

  export const SvgArrowLeft = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5,3L0,8l5,5v-3h11V6H5V3z"/></svg>;
    },
  });