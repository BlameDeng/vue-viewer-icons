import { defineComponent, SVGAttributes } from "vue";

  export const SvgMinimize = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect x="2" y="7" width="12" height="2"/></svg>;
    },
  });