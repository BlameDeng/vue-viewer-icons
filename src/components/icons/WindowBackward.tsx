import { defineComponent, SVGAttributes } from "vue";

  export const SvgWindowBackward = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0,0V16H16V0ZM12,1h1V2H12ZM1,15V4H15V15ZM14,2V1h1V2Z"/><path d="M7,12,4,9,7,6V8h5v2H7Z"/></svg>;
    },
  });