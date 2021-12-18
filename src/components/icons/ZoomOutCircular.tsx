import { defineComponent, SVGAttributes } from "vue";

  export const SvgZoomOutCircular = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8 0a8 8 0 1 0 8 8 8 8 0 0 0 -8-8m0 14.7a6.7 6.7 0 1 1 6.7-6.7 6.7 6.7 0 0 1 -6.7 6.7zm4-5.7v-2h-8v2z"/></svg>;
    },
  });