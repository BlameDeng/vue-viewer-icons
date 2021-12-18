import { defineComponent, SVGAttributes } from "vue";

  export const SvgDistributeRight = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14,0V16H13V11H9V5h4V0ZM6,3H2V13H6v3H7V0H6Z" fill-rule="evenodd"/></svg>;
    },
  });