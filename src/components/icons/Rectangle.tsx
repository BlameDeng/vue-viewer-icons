import { defineComponent, SVGAttributes } from "vue";

  export const SvgRectangle = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13.5,11.5H2.5v-7h11ZM15,3H1V13H15V3Z"/></svg>;
    },
  });