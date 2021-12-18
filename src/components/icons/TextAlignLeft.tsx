import { defineComponent, SVGAttributes } from "vue";

  export const SvgTextAlignLeft = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m0 14h12v1h-12zm0-3h16v1h-16zm0-3h12v1h-12zm0-3h16v1h-16zm0-3h12v1h-12z"/></svg>;
    },
  });