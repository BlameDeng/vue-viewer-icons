import { defineComponent, SVGAttributes } from "vue";

  export const SvgFontSize = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m13.4 6h-1.9l-2.3 6.3-3.2-9.3h-2.5l-3.5 10h2.3l.7-2.3h3.6l.7 2.3h3.3l.5-1.7h2.6l.5 1.7h1.8zm-9.9 3 1.3-4.3 1.3 4.3zm9-2 .9 3.2h-1.8z"/></svg>;
    },
  });