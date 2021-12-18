import { defineComponent, SVGAttributes } from "vue";

  export const SvgFilter = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m0 0v2l6 5v9l4-3v-6l6-5v-2z"/></svg>;
    },
  });