import { defineComponent, SVGAttributes } from "vue";

  export const SvgDragHandle = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M4,7H1V4H4Zm6-3H7V7h3Zm6,0H13V7h3ZM4,10H1v3H4Zm6,0H7v3h3Zm6,0H13v3h3Z"/></svg>;
    },
  });