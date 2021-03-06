import { defineComponent, SVGAttributes } from "vue";

  export const SvgProgressForwardCircular = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M6.53 12.53 5.47 11.47 8.939 8 5.47 4.53 6.53 3.47 11.06 8 6.53 12.53z"/><path d="M8 1.5A6.5 6.5 0 1 1 1.5 8 6.5074 6.5074 0 0 1 8 1.5M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0"/></svg>;
    },
  });