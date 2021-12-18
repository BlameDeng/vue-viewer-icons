import { defineComponent, SVGAttributes } from "vue";

  export const SvgMoreVerticalCircular = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m14.5 8a6.5 6.5 0 1 1 -6.5-6.5 6.5 6.5 0 0 1 6.5 6.5m1.5 0a8 8 0 1 0 -8 8 8 8 0 0 0 8-8zm-7-3a1 1 0 1 1 -1-1 1 1 0 0 1 1 1m0 3a1 1 0 1 1 -1-1 1 1 0 0 1 1 1m0 3a1 1 0 1 1 -1-1 1 1 0 0 1 1 1z"/></svg>;
    },
  });