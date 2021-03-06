import { defineComponent, SVGAttributes } from "vue";

  export const SvgPauseCircular = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0M7 11H5V5H7m4 6H9V5h2"/></svg>;
    },
  });