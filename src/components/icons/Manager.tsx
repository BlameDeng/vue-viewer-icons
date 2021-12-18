import { defineComponent, SVGAttributes } from "vue";

  export const SvgManager = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m10 10.7s.10522 1.3-1.5 1.3h-1c-1.62126 0-1.5-1.3-1.5-1.3l-6-2.7v6a.94477.94477 0 0 0 1 1h14a.94477.94477 0 0 0 1-1v-6zm5-6.7h-3v-1.5a1.538 1.538 0 0 0 -1.5-1.5h-5a1.538 1.538 0 0 0 -1.5 1.5v1.5h-3a.94477.94477 0 0 0 -1 1v2l6.2 2.7a1.70937 1.70937 0 0 1 1.3-.7h1a1.70937 1.70937 0 0 1 1.3.7l6.2-2.7v-2a.94477.94477 0 0 0 -1-1m-4 0h-6v-1.5a.47239.47239 0 0 1 .5-.5h5a.47239.47239 0 0 1 .5.5zm-3.5 6h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1"/></svg>;
    },
  });