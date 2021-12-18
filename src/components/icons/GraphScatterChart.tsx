import { defineComponent, SVGAttributes } from "vue";

  export const SvgGraphScatterChart = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m2 14v-14h-2v16h16v-2zm3-4.4a1.4 1.4 0 1 1 -1.4 1.4 1.4 1.4 0 0 1 1.4-1.4zm0-4.1a1.4 1.4 0 1 1 -1.4 1.4 1.4 1.4 0 0 1 1.4-1.4zm3 3a1.4 1.4 0 1 1 -1.4 1.4 1.4 1.4 0 0 1 1.4-1.4zm1-3.9a1.4 1.4 0 1 1 -1.4 1.4 1.4 1.4 0 0 1 1.4-1.4zm4 0a1.4 1.4 0 1 1 -1.4 1.4 1.4 1.4 0 0 1 1.4-1.4zm-2 2.9a1.4 1.4 0 1 1 -1.4 1.4 1.4 1.4 0 0 1 1.4-1.4zm0-5.9a1.4 1.4 0 1 1 -1.4 1.4 1.4 1.4 0 0 1 1.4-1.4z"/></svg>;
    },
  });