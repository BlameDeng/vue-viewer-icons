import { defineComponent, SVGAttributes } from "vue";

  export const SvgWindowForward = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0,0V16H16V0ZM12,1h1V2H12ZM1,15V4H15V15ZM14,2V1h1V2Z"/><path d="m9 6l3 3-3 3v-2h-5v-2h5"/></svg>;
    },
  });