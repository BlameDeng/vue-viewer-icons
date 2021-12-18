import { defineComponent, SVGAttributes } from "vue";

  export const SvgFolderChevronDown = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m14 4h-7v-1a1.07539 1.07539 0 0 0 -1-1h-4a1.07539 1.07539 0 0 0 -1 1v10a1.07539 1.07539 0 0 0 1 1h12a1.07539 1.07539 0 0 0 1-1v-8a1.07539 1.07539 0 0 0 -1-1zm-6 8-4.9-4.9.9-.8 4 4 4-4 .9.9z"/></svg>;
    },
  });