import { defineComponent, SVGAttributes } from "vue";

  export const SvgCircle = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8,2.5A5.5,5.5,0,1,1,2.5,8,5.5062,5.5062,0,0,1,8,2.5M8,1a7,7,0,1,0,7,7A7,7,0,0,0,8,1Z"/></svg>;
    },
  });