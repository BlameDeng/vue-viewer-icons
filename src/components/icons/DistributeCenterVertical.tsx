import { defineComponent, SVGAttributes } from "vue";

  export const SvgDistributeCenterVertical = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16,4V5H11V7H5V5H0V4H5V2h6V4ZM13,9H3v2H0v1H3v2H13V12h3V11H13Z" fill-rule="evenodd"/></svg>;
    },
  });