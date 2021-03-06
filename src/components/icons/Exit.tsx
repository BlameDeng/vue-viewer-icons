import { defineComponent, SVGAttributes } from "vue";

  export const SvgExit = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="m11 2v4h-7v4h7v4l5-6"/><path d="M5,14H2V2H5V0H0V16H5Z"/></svg>;
    },
  });