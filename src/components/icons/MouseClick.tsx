import { defineComponent, SVGAttributes } from "vue";

  export const SvgMouseClick = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m7.5 0a5.5 5.5 0 0 0 -5.5 5.5v5a5.5 5.5 0 0 0 11 0v-5a5.5 5.5 0 0 0 -5.5-5.5zm4.5 5.5v.5h-3v-2.5a1.49569 1.49569 0 0 0 -1-1.4082v-1.0412a4.49037 4.49037 0 0 1 4 4.4494zm-4-2v3a.5.5 0 0 1 -1 0v-3a.5.5 0 0 1 1 0zm-1-2.4494v1.0412a1.49569 1.49569 0 0 0 -1 1.4082v2.5h-3v-.5a4.49037 4.49037 0 0 1 4-4.4494zm.5 13.9494a4.50508 4.50508 0 0 1 -4.5-4.5v-3.5h3.0918a1.49151 1.49151 0 0 0 2.8164 0h3.0918v3.5a4.50508 4.50508 0 0 1 -4.5 4.5z"/></svg>;
    },
  });