import { defineComponent, SVGAttributes } from "vue";

  export const SvgUpload = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m2 5h4v7h4v-7h4l-6-5zm12 6v3h-12v-3h-2v5h16v-5z"/></svg>;
    },
  });