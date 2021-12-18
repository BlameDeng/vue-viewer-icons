import { defineComponent, SVGAttributes } from "vue";

  export const SvgTextAlignRight = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m4 14h12v1h-12zm-4-3h16v1h-16zm4-3h12v1h-12zm-4-3h16v1h-16zm4-3h12v1h-12z"/></svg>;
    },
  });