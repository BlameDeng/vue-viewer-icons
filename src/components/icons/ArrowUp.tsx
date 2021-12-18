import { defineComponent, SVGAttributes } from "vue";

  export const SvgArrowUp = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m13 5-5-5-5 5h3v11h4v-11z"/></svg>;
    },
  });