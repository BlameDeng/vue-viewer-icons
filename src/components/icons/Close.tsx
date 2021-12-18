import { defineComponent, SVGAttributes } from "vue";

  export const SvgClose = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m14 0-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6 6-6"/></svg>;
    },
  });