import { defineComponent, SVGAttributes } from "vue";

  export const SvgMoreCircular = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8 1.5a6.5 6.5 0 1 1 -6.5 6.5 6.50736 6.50736 0 0 1 6.5-6.5m0-1.5a8 8 0 1 0 8 8 8 8 0 0 0 -8-8zm-3 7a1 1 0 1 1 -1 1 1 1 0 0 1 1-1zm3 0a1 1 0 1 1 -1 1 .9999.9999 0 0 1 1-1zm3 0a1 1 0 1 1 -1.0001 1 1 1 0 0 1 1.0001-1z"/></svg>;
    },
  });