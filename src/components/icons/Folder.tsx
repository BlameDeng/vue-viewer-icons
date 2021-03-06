import { defineComponent, SVGAttributes } from "vue";

  export const SvgFolder = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M1,13a1,1,0,0,0,1,1H14a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1H7V3A1,1,0,0,0,6,2H2A1,1,0,0,0,1,3Z"/></svg>;
    },
  });