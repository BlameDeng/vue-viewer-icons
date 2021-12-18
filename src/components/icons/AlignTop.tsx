import { defineComponent, SVGAttributes } from "vue";

  export const SvgAlignTop = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0,1H16V2H0ZM3,3H7V14H3ZM9,3h4v7H9Z" fill-rule="evenodd"/></svg>;
    },
  });