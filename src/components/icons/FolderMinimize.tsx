import { defineComponent, SVGAttributes } from "vue";

  export const SvgFolderMinimize = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M15,10V4a1,1,0,0,0-1-1H7V2A1,1,0,0,0,6,1H2A1,1,0,0,0,1,2V12a1,1,0,0,0,1,1H7V10Z"/><path d="m8 13v-2h8v2"/></svg>;
    },
  });