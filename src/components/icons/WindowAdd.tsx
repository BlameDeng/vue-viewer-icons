import { defineComponent, SVGAttributes } from "vue";

  export const SvgWindowAdd = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7,12H1V4H12V7h1V0H0V13H7ZM11,1h1V2H11ZM9,1h1V2H9Z"/><path d="M11,8v3H8v2h3v3h2V13h3V11H13V8Z"/></svg>;
    },
  });