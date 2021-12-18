import { defineComponent, SVGAttributes } from "vue";

  export const SvgTextAlignJustify = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m0 14h16v1h-16zm0-3h16v1h-16zm0-3h16v1h-16zm0-3h16v1h-16zm0-3h16v1h-16z"/></svg>;
    },
  });