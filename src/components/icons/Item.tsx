import { defineComponent, SVGAttributes } from "vue";

  export const SvgItem = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m.00007 7.99983 7.99993-7.99992 7.99992 7.99992-7.99992 7.99992z"/></svg>;
    },
  });