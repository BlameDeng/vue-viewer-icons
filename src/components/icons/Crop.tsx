import { defineComponent, SVGAttributes } from "vue";

  export const SvgCrop = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2,2V0H4V12H16v2H14v2H12V14H2V4H0V2Z"/><path d="M14,11V2H5V4h7v7Z"/></svg>;
    },
  });