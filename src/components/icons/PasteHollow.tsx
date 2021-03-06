import { defineComponent, SVGAttributes } from "vue";

  export const SvgPasteHollow = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13,2H12V3h1V15H3V3H4V2H3A1,1,0,0,0,2,3V15a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V3A1,1,0,0,0,13,2Z"/><path d="M9,1A1,1,0,1,0,7,1H5.75A.75.75,0,0,0,5,1.75V3h6V1.75A.75.75,0,0,0,10.25,1Z"/><path d="M4.5,4h7a.5.5,0,0,1,0,1h-7a.5.5,0,0,1,0-1Z"/><path d="M4.5,10h5a.5.5,0,0,1,0,1h-5a.5.5,0,0,1,0-1Z"/><path d="M4.5,8h7a.5.5,0,0,1,0,1h-7a.5.5,0,0,1,0-1Z"/><path d="M4.5,6h6a.5.5,0,0,1,0,1h-6a.5.5,0,0,1,0-1Z"/><path d="M4.5,12h6a.5.5,0,0,1,0,1h-6a.5.5,0,0,1,0-1Z"/></svg>;
    },
  });