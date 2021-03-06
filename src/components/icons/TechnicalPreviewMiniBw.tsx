import { defineComponent, SVGAttributes } from "vue";

  export const SvgTechnicalPreviewMiniBw = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m15.7 7.3-7-7c-.4-.4-1-.4-1.4 0l-7 7c-.4.4-.4 1 0 1.4l7 7c.4.4 1 .4 1.4 0l7-7c.4-.4.4-1 0-1.4m-7.7 2.7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"/></svg>;
    },
  });