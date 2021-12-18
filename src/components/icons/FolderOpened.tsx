import { defineComponent, SVGAttributes } from "vue";

  export const SvgFolderOpened = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m3.07 7h12.19a.7.7 0 0 1 .68 1l-1.66 5a1.53 1.53 0 0 1 -1.35 1h-12.19a.7.7 0 0 1 -.68-1l1.66-5a1.53 1.53 0 0 1 1.35-1z"/><path d="m.77 7.68a2.54 2.54 0 0 1 2.3-1.68h10.93v-1a1 1 0 0 0 -1-1h-7v-1a1 1 0 0 0 -1-1h-4a1 1 0 0 0 -1 1v7z"/></svg>;
    },
  });