import { defineComponent, SVGAttributes } from "vue";

  export const SvgStatusRunning = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8 0a8 8 0 1 0 8 8 8 8 0 0 0 -8-8m-2 11.6v-7.2l6 3.6z"/></svg>;
    },
  });