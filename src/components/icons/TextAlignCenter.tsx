import { defineComponent, SVGAttributes } from "vue";

  export const SvgTextAlignCenter = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m2 14h12v1h-12zm-2-3h16v1h-16zm2-3h12v1h-12zm-2-3h16v1h-16zm2-3h12v1h-12z"/></svg>;
    },
  });