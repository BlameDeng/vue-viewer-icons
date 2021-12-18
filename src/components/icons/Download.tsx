import { defineComponent, SVGAttributes } from "vue";

  export const SvgDownload = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m14 7h-4v-7h-4v7h-4l6 5zm0 4v3h-12v-3h-2v5h16v-5z"/></svg>;
    },
  });