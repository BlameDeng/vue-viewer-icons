import { defineComponent, SVGAttributes } from "vue";

  export const SvgImageFrame = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m10.3 5.9-2.6 3.4-1.7-1.7-3 3.4h10z"/><circle cx="4.4" cy="5.9" r="1.3"/><path d="m0 2v12h16v-12zm14 10h-12v-8h12z"/></svg>;
    },
  });