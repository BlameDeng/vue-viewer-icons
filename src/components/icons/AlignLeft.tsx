import { defineComponent, SVGAttributes } from "vue";

  export const SvgAlignLeft = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M1,0H2V16H1ZM3,9H14v4H3ZM3,3h7V7H3Z" fill-rule="evenodd"/></svg>;
    },
  });