import { defineComponent, SVGAttributes } from "vue";

  export const SvgDuplicate = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M12,16H0V4H2V14H12Z"/><path d="M3,1V13H15V1ZM13,8H10v3H8V8H5V6H8V3h2V6h3Z"/></svg>;
    },
  });