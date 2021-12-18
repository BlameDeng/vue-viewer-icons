import { defineComponent, SVGAttributes } from "vue";

  export const SvgLabel = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m14.5 2h-13a1.5 1.5 0 0 0 -1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h10.32a1.45 1.45 0 0 0 1-.42l2.74-2.74a1.45 1.45 0 0 0 .42-1v-5.34a1.5 1.5 0 0 0 -1.48-1.5zm.5 7-1.25 1.25-.5.49-1.25 1.26v-2.5a.5.5 0 0 1 .5-.5zm0-1h-2.5a1.5 1.5 0 0 0 -1.5 1.5v2.5h-9.5a.5.5 0 0 1 -.5-.5v-8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5zm-2.5-1h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1zm-2.89 2h-6.22a.45.45 0 0 1 -.39-.5.45.45 0 0 1 .39-.5h6.22a.45.45 0 0 1 .39.5.45.45 0 0 1 -.39.5z"/></svg>;
    },
  });