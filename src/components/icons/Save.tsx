import { defineComponent, SVGAttributes } from "vue";

  export const SvgSave = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m1 1v12l2 2h12v-14zm11 12a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm1-5.5a.5.5 0 0 1 -.5.5h-9a.5.5 0 0 1 -.5-.5v-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5zm-7 2.5a1 1 0 0 1 1 1v1a1 1 0 0 1 -2 0v-1a1 1 0 0 1 1-1"/></svg>;
    },
  });