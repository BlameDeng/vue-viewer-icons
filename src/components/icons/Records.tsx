import { defineComponent, SVGAttributes } from "vue";

  export const SvgRecords = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M1,15H15V11H1Zm5-3H7v1H9V12h1v2H6ZM1,10H15V6H1ZM6,7H7V8H9V7h1V9H6ZM1,1V5H15V1Zm9,3H6V2H7V3H9V2h1Z"/></svg>;
    },
  });