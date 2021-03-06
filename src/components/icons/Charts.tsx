import { defineComponent, SVGAttributes } from "vue";

  export const SvgCharts = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M6,8.72449A4.45809,4.45809,0,0,1,4.5,9a4.45759,4.45759,0,0,1-2.79437-.99823L5,4.707V.05042A4.47928,4.47928,0,0,1,8.24011,7H6ZM4,4.293V.05042A4.45649,4.45649,0,0,0,.99841,7.29456ZM9,14H7V8H9Zm3,0H10V5h2Zm3-4v4H13V10ZM6,16H16V15H6Z"/></svg>;
    },
  });