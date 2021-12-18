import { defineComponent, SVGAttributes } from "vue";

  export const SvgCheckmarkSmall = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m6 13.4-4.7-4.7 1.4-1.4 3.3 3.3 7.3-7.3 1.4 1.4z"/></svg>;
    },
  });