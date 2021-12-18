import { defineComponent, SVGAttributes } from "vue";

  export const SvgArrowRight = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m11 3 5 5-5 5v-3h-11v-4h11z"/></svg>;
    },
  });