import { defineComponent, SVGAttributes } from "vue";

  export const SvgList = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m2 2a.94477.94477 0 0 1 -1 1 .94477.94477 0 0 1 -1-1 .94477.94477 0 0 1 1-1 1.00209 1.00209 0 0 1 1 1m0 4a.94477.94477 0 0 1 -1 1 1.00209 1.00209 0 0 1 -1-1 .94477.94477 0 0 1 1-1 1.00209 1.00209 0 0 1 1 1m0 4a.94477.94477 0 0 1 -1 1 1.00209 1.00209 0 0 1 -1-1 .94477.94477 0 0 1 1-1 1.00209 1.00209 0 0 1 1 1m0 4a.94477.94477 0 0 1 -1 1 1.00209 1.00209 0 0 1 -1-1 .94477.94477 0 0 1 1-1 1.07539 1.07539 0 0 1 1 1m2-13h12v2h-12zm0 4h12v2h-12zm0 4h12v2h-12zm0 4h12v2h-12z"/></svg>;
    },
  });