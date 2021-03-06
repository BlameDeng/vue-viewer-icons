import { defineComponent, SVGAttributes } from "vue";

  export const SvgFolderAdd = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14,10h1V4a1,1,0,0,0-1-1H7V2A1,1,0,0,0,6,1H2A1,1,0,0,0,1,2V12a1,1,0,0,0,1,1H7V10h3V7h4Z"/><path d="M11,8v3H8v2h3v3h2V13h3V11H13V8Z"/></svg>;
    },
  });