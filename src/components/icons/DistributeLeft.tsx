import { defineComponent, SVGAttributes } from "vue";

  export const SvgDistributeLeft = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M3,3H7V13H3v3H2V0H3ZM14,5H10V0H9V16h1V11h4Z" fill-rule="evenodd"/></svg>;
    },
  });