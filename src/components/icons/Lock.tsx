import { defineComponent, SVGAttributes } from "vue";

  export const SvgLock = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13,7V4.71A4.71,4.71,0,0,0,8.29,0H7.72A4.74,4.74,0,0,0,3,4.72V7H2v9H14V7ZM7.5,2h1A2.52,2.52,0,0,1,11,4.51V7H5V4.5A2.5,2.5,0,0,1,7.5,2ZM8.8,14H7.3l.2-2.2A1,1,0,0,1,7,11a1.08,1.08,0,0,1,1-1,1.08,1.08,0,0,1,1,1,.89.89,0,0,1-.5.8Z"/></svg>;
    },
  });