import { defineComponent, SVGAttributes } from "vue";

  export const SvgProgressForward = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5.56977,15.5,3.814,13.74426,9.55822,8,3.814,2.25583,5.56977.5l7.5,7.5Z"/></svg>;
    },
  });