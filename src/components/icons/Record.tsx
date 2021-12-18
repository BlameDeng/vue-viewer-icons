import { defineComponent, SVGAttributes } from "vue";

  export const SvgRecord = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8,3A5,5,0,1,1,3,8,5,5,0,0,1,8,3Z" fill-rule="evenodd"/></svg>;
    },
  });