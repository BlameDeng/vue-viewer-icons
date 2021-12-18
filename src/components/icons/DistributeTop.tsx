import { defineComponent, SVGAttributes } from "vue";

  export const SvgDistributeTop = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16,2V3H11V7H5V3H0V2H16ZM3,9H0v1H3v4H13V10h3V9H3Z" fill-rule="evenodd"/></svg>;
    },
  });