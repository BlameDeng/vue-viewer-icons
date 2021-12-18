import { defineComponent, SVGAttributes } from "vue";

  export const SvgSaveUpdate = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m7.1 13h-3.1a1 1 0 0 1 -1-1v-3a1 1 0 0 1 1-1h5a4.93 4.93 0 0 1 5-.58v-7.42h-14v12l2 2h5.42a5.00007 5.00007 0 0 1 -.32-1zm-5.1-6.5v-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v5a.5.5 0 0 1 -.5.5h-9a.5.5 0 0 1 -.5-.5zm3 2.5a1 1 0 0 1 1 1v1a1 1 0 0 1 -2 0v-1a1 1 0 0 1 1-1m4.05 3.5h-1.05v2.5l.75-.7a3.87 3.87 0 0 0 3.25 1.7 4 4 0 0 0 4-3.5h-1a3.0264 3.0264 0 0 1 -5.5 1.15l1.2-1.15zm2.95-4.5a4 4 0 0 0 -3.95 3.5h1a3 3 0 0 1 2.95-2.5 2.86 2.86 0 0 1 2.55 1.45l-1.05 1.05h2.5v-2.5l-.7.7a4.16 4.16 0 0 0 -3.3-1.7"/></svg>;
    },
  });