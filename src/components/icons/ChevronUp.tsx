import { defineComponent, SVGAttributes } from "vue";

  export const SvgChevronUp = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m16 11.3-1.4 1.4-6.6-6.6-6.6 6.6-1.4-1.4 8-8"/></svg>;
    },
  });