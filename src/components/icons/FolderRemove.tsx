import { defineComponent, SVGAttributes } from "vue";

  export const SvgFolderRemove = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M15,7.9289V4a1,1,0,0,0-1-1H7V2A1,1,0,0,0,6,1H2A1,1,0,0,0,1,2V12a1,1,0,0,0,1,1H8.1716l1-1L7.05,9.8787,9.8787,7.05,12,9.1716,14.1213,7.05Z"/><path d="m14.12 8.465l-2.121 2.121-2.121-2.121-1.414 1.414 2.121 2.121-2.121 2.121 1.414 1.414 2.121-2.121 2.121 2.121 1.414-1.414-2.121-2.121 2.121-2.121"/></svg>;
    },
  });