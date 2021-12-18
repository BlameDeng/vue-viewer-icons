import { defineComponent, SVGAttributes } from "vue";

  export const SvgMerge = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="m9 9.586v-3.586h2l-3-5-3 5h2v3.586l-3.707 3.707 1.414 1.414 3.293-3.293 3.293 3.293 1.414-1.414-3.707-3.707"/></svg>;
    },
  });