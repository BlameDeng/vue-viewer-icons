import { defineComponent, SVGAttributes } from "vue";

  export const SvgCamera = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M1.5,3H3A.5.5,0,0,0,3,2H1.5a.5.5,0,0,0,0,1ZM15,4H11.55L11,2.62A1.29,1.29,0,0,0,9.85,2H6a1.28,1.28,0,0,0-1.19.62L4.27,4H1A1,1,0,0,0,0,5v8a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V5A1,1,0,0,0,15,4ZM8,13a4,4,0,1,1,4-4A4,4,0,0,1,8,13Zm4.5-7a.5.5,0,1,1,.5-.5A.5.5,0,0,1,12.5,6ZM8,6a3,3,0,1,0,3,3A3,3,0,0,0,8,6"/></svg>;
    },
  });