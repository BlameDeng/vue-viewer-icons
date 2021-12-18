import { defineComponent, SVGAttributes } from "vue";

  export const SvgTag = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m9 0-9 9 7 7 9-9v-7zm3.5 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1 -1.5 1.5z"/></svg>;
    },
  });