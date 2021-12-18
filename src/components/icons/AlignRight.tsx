import { defineComponent, SVGAttributes } from "vue";

  export const SvgAlignRight = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14,0H13V16h1ZM12,9H1v4H12Zm0-6H5V7h7Z" fill-rule="evenodd"/></svg>;
    },
  });