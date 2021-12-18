import { defineComponent, SVGAttributes } from "vue";

  export const SvgDistributeBottom = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16,6V7H0V6H5V2h6V6ZM13,9H3v4H0v1H16V13H13Z" fill-rule="evenodd"/></svg>;
    },
  });