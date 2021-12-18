import { defineComponent, SVGAttributes } from "vue";

  export const SvgScreenshare = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m.5 13a.5.5 0 1 1 -.5.5.5.5 0 0 1 .5-.5zm6.5.5a6.50753 6.50753 0 0 0 -6.5-6.5.5.5 0 0 0 0 1 5.50654 5.50654 0 0 1 5.5 5.5.5.5 0 0 0 1 0zm-2 0a4.50491 4.50491 0 0 0 -4.5-4.5.5.5 0 0 0 0 1 3.50424 3.50424 0 0 1 3.5 3.5.5.5 0 0 0 1 0zm-2 0a2.50263 2.50263 0 0 0 -2.5-2.5.5.5 0 0 0 0 1 1.50164 1.50164 0 0 1 1.5 1.5.5.5 0 0 0 1 0zm12-.5v-10h-14v3h-1v-4h16v12h-8v-1z" fill-rule="evenodd"/></svg>;
    },
  });