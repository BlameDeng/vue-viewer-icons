import { defineComponent, SVGAttributes } from "vue";

  export const SvgZoomInCircular = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8 0a8 8 0 1 0 8 8 8 8 0 0 0 -8-8m0 14.7a6.7 6.7 0 1 1 6.7-6.7 6.7 6.7 0 0 1 -6.7 6.7zm4-7.7h-3v-3h-2v3h-3v2h3v3h2v-3h3z"/></svg>;
    },
  });