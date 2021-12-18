import { defineComponent, SVGAttributes } from "vue";

  export const SvgPlayCircular = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0M6 11.6V4.4L12 8 6 11.6"/></svg>;
    },
  });