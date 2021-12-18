import { defineComponent, SVGAttributes } from "vue";

  export const SvgThumbnails = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m9 0h7v7h-7zm0 9h7v7h-7zm-9 0h7v7h-7zm0-9h7v7h-7z"/></svg>;
    },
  });