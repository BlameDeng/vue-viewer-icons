import { defineComponent, SVGAttributes } from "vue";

  export const SvgComputer = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M15,1H1A.94477.94477,0,0,0,0,2v9.1A.91591.91591,0,0,0,1,12H7v2c-.9.2-1.9,1-1.2,1h4.3c.7,0-.7-.9-1.1-1V12h6a.97939.97939,0,0,0,1-1V2a.94477.94477,0,0,0-1-1m0,9H1V2H15v8"/></svg>;
    },
  });