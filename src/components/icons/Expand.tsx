import { defineComponent, SVGAttributes } from "vue";

  export const SvgExpand = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m9 6.5a.50007.50007 0 0 1 -.5.5h-1.5v1.5a.5.5 0 0 1 -1 0v-1.5h-1.5a.5.5 0 0 1 0-1h1.5v-1.5a.5.5 0 0 1 1 0v1.5h1.5a.5.5 0 0 1 .5.5zm1 5.5h-7a2 2 0 0 1 -2-2v-7a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2zm-7-1h7a1.00115 1.00115 0 0 0 1-1v-7a1.00115 1.00115 0 0 0 -1-1h-7a1.00115 1.00115 0 0 0 -1 1v7a1.00115 1.00115 0 0 0 1 1zm10-7v1a1.00115 1.00115 0 0 1 1 1v7a1.00115 1.00115 0 0 1 -1 1h-7a1.00115 1.00115 0 0 1 -1-1h-1a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-7a2 2 0 0 0 -2-2z" fill-rule="evenodd"/></svg>;
    },
  });