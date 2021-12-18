import { defineComponent, SVGAttributes } from "vue";

  export const SvgTransparency = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m5 11h2v1h-2z" opacity=".3"/><path d="m11 9v1.5a.49514.49514 0 0 1 -.5.5h-1.5v1h1.5a1.498 1.498 0 0 0 1.5-1.5v-1.5z" opacity=".3"/><path d="m11 5h1v2h-1z" opacity=".3"/><path d="m10.5 0h-1.5v1h1.5a.49511.49511 0 0 1 .5.5v1.5h1v-1.5a1.498 1.498 0 0 0 -1.5-1.5zm-9 0a1.498 1.498 0 0 0 -1.5 1.5v1.5h1v-1.5a.49511.49511 0 0 1 .5-.5h1.5v-1zm-1.5 7h1v-2h-1zm1.5 4a.49514.49514 0 0 1 -.5-.5v-1.5h-1v1.5a1.498 1.498 0 0 0 1.5 1.5h1.5v-1zm3.5-11v1h2v-1zm9.5 4h-9a1.498 1.498 0 0 0 -1.5 1.5v9a1.498 1.498 0 0 0 1.5 1.5h9a1.498 1.498 0 0 0 1.5-1.5v-9a1.498 1.498 0 0 0 -1.5-1.5zm.5 10.5a.49514.49514 0 0 1 -.5.5h-9a.49514.49514 0 0 1 -.5-.5v-9a.49511.49511 0 0 1 .5-.5h9a.49511.49511 0 0 1 .5.5z"/></svg>;
    },
  });