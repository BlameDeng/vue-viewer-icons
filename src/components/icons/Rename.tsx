import { defineComponent, SVGAttributes } from "vue";

  export const SvgRename = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m13 3h-2v1h5v-1h-2v10h2v-1h-5v1h2zm-10 4h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2zm8 3h-10v-4h10v-1h-10a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h10z" /></svg>;
    },
  });