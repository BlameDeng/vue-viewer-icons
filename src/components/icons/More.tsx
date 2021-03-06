import { defineComponent, SVGAttributes } from "vue";

  export const SvgMore = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m4 8a2 2 0 1 1 -2-2 2 2 0 0 1 2 2zm4-2a2 2 0 1 0 2 2 2 2 0 0 0 -2-2zm6 0a2 2 0 1 0 2 2 2 2 0 0 0 -2-2z"/></svg>
;
    },
  });