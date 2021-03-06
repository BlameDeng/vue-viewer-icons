import { defineComponent, SVGAttributes } from "vue";

  export const SvgLockUnlocked = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5,7V4.5A2.5,2.5,0,0,1,7.5,2h1A2.52,2.52,0,0,1,11,4.51V5h2V4.71A4.71,4.71,0,0,0,8.29,0H7.72A4.74,4.74,0,0,0,3,4.72V7H2v9H14V7Zm3.8,7H7.3l.2-2.2A1,1,0,0,1,7,11a1.08,1.08,0,0,1,1-1,1.08,1.08,0,0,1,1,1,.89.89,0,0,1-.5.8Z"/></svg>;
    },
  });