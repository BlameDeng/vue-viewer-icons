import { defineComponent, SVGAttributes } from "vue";

  export const SvgCursor = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m4.17 11.83a.34.34 0 0 0 .36 0l2.52-1 1.65 3.94a.37.37 0 0 0 .36.23h.16l1.44-.59a.4.4 0 0 0 .22-.51l-1.65-3.97 2.52-1a.39.39 0 0 0 .13-.64l-7.21-7.18a.4.4 0 0 0 -.67.28v10.11a.41.41 0 0 0 .17.33z"/></svg>;
    },
  });