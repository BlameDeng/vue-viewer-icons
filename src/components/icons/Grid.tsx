import { defineComponent, SVGAttributes } from "vue";

  export const SvgGrid = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M15,0H1A1,1,0,0,0,0,1V15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V1A1,1,0,0,0,15,0ZM10,1V5H6V1Zm0,5v4H6V6ZM1,1H5V5H1ZM1,6H5v4H1Zm0,9V11H5v4Zm5,0V11h4v4Zm9,0H11V11h4Zm0-5H11V6h4Zm0-5H11V1h4Z"/></svg>;
    },
  });