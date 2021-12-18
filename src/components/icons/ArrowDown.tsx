import { defineComponent, SVGAttributes } from "vue";

  export const SvgArrowDown = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m13 11-5 5-5-5h3v-11h4v11"/></svg>;
    },
  });