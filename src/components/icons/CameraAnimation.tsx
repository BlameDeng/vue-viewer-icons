import { defineComponent, SVGAttributes } from "vue";

  export const SvgCameraAnimation = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m16 3-4 2v-.5a1.538 1.538 0 0 0 -1.5-1.5h-9a1.538 1.538 0 0 0 -1.5 1.5v7a1.538 1.538 0 0 0 1.5 1.5h9a1.538 1.538 0 0 0 1.5-1.5v-.5l4 2z"/></svg>;
    },
  });