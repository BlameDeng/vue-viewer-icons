import { defineComponent, SVGAttributes } from "vue";

  export const SvgProgressBackward = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M10.43023.5,12.186,2.25574,6.44178,8,12.186,13.74417,10.43023,15.5l-7.5-7.5Z"/></svg>;
    },
  });