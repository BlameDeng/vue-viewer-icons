import { defineComponent, SVGAttributes } from "vue";

  export const SvgAdd = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7,1v6H1v2h6v6h2V9h6V7H9V1H7z"/></svg>;
    },
  });