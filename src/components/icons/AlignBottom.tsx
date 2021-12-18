import { defineComponent, SVGAttributes } from "vue";

  export const SvgAlignBottom = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0,14H16V13H0Zm3-2H7V1H3Zm6,0h4V5H9Z" fill-rule="evenodd"/></svg>;
    },
  });