import { defineComponent, SVGAttributes } from "vue";

  export const SvgStop = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m12 3h-8a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0 -1-1z"/></svg>;
    },
  });