import { defineComponent, SVGAttributes } from "vue";

  export const SvgDetails = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13,0H3A1,1,0,0,0,2,1V15a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V1A1,1,0,0,0,13,0ZM5,13H4V12H5Zm0-3H4V9H5ZM5,7H4V6H5ZM5,4H4V3H5Zm7,9H7V12h5Zm0-3H7V9h5Zm0-3H7V6h5Zm0-3H7V3h5Z"/></svg>;
    },
  });