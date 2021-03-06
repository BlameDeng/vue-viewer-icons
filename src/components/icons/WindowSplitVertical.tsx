import { defineComponent, SVGAttributes } from "vue";

  export const SvgWindowSplitVertical = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0,0V16H16V0ZM12,1h1V2H12ZM1,4H7V15H1ZM15,15H8V4h7ZM14,2V1h1V2Z"/></svg>;
    },
  });