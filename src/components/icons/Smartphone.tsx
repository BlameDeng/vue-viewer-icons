import { defineComponent, SVGAttributes } from "vue";

  export const SvgSmartphone = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m11 0h-7a.94477.94477 0 0 0 -1 1v14a.94477.94477 0 0 0 1 1h7a.94477.94477 0 0 0 1-1v-14a.94477.94477 0 0 0 -1-1zm-5 1h3v1h-3zm1.5 14a.5.5 0 1 1 .5-.5.47239.47239 0 0 1 -.5.5zm3.5-2h-7v-10h7z"/></svg>;
    },
  });