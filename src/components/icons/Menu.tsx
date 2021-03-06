import { defineComponent, SVGAttributes } from "vue";

  export const SvgMenu = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" ><g fill-rule="evenodd"><path d="M0,12h16v2H0V12z"/><path d="M0,7h16v2H0V7z"/><path d="M0,2h16v2H0V2z"/></g></svg>;
    },
  });