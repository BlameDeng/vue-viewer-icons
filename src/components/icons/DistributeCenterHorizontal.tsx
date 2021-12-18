import { defineComponent, SVGAttributes } from "vue";

  export const SvgDistributeCenterHorizontal = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5,3H7V13H5v3H4V13H2V3H4V0H5Zm9,2H12V0H11V5H9v6h2v5h1V11h2Z" fill-rule="evenodd"/></svg>;
    },
  });