import { defineComponent, SVGAttributes } from "vue";

  export const SvgDelete = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14,1V2H2V1H5L6,0h4l1,1ZM3,3H13V15a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1ZM9,14h1V5H9ZM6,14H7V5H6Z"/></svg>;
    },
  });