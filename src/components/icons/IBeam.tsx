import { defineComponent, SVGAttributes } from "vue";

  export const SvgIBeam = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m14 2v-2h-12v2h1.9167a3.08338 3.08338 0 0 1 3.0833 3.0833v5.8333a3.0834 3.0834 0 0 1 -3.0833 3.0834h-1.9167v2h12v-2h-1.9167a3.08338 3.08338 0 0 1 -3.0833-3.0833v-5.8334a3.08338 3.08338 0 0 1 3.0833-3.0833z"/></svg>;
    },
  });