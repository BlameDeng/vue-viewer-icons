import { defineComponent, SVGAttributes } from "vue";

  export const SvgProgressBackwardCircular = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M9.47 3.47 10.53 4.53 7.06 8 10.53 11.47 9.47 12.53 4.939 8 9.47 3.47z"/><path d="M8 14.5A6.5 6.5 0 1 1 14.5 8 6.5074 6.5074 0 0 1 8 14.5M8 16A8 8 0 1 0 0 8a8 8 0 0 0 8 8"/></svg>;
    },
  });