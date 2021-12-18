import { defineComponent, SVGAttributes } from "vue";

  export const SvgChevronRightDouble = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m1.4 0-1.4 1.4 6.6 6.6-6.6 6.6 1.4 1.4 8-8zm6.6 0-1.4 1.4 6.6 6.6-6.6 6.6 1.4 1.4 8-8z"/></svg>;
    },
  });