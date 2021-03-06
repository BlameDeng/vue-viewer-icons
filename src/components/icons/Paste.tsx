import { defineComponent, SVGAttributes } from "vue";

  export const SvgPaste = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13,2H12V4H4V2H3A1,1,0,0,0,2,3V15a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V3A1,1,0,0,0,13,2ZM9,12v1H4V12ZM4,10V9h8v1Zm8-4V7H4V6ZM11,3H5V1.75A.75.75,0,0,1,5.75,1H7A1,1,0,0,1,9,1h1.25a.75.75,0,0,1,.75.75Z"/></svg>;
    },
  });