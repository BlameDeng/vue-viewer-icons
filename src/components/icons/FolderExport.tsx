import { defineComponent, SVGAttributes } from "vue";

  export const SvgFolderExport = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m11 15a6.07984 6.07984 0 0 0 -6-6v-2l-5 3.5 5 3.5v-2c3-.1 4.4 1.5 6 3m5-12.21v7.42a.92824.92824 0 0 1 -.93.93h-4.26a6.97559 6.97559 0 0 0 -4.81-3.06v-3l-3 2.1v-6.25a.93465.93465 0 0 1 .93-.93h3.71a.92825.92825 0 0 1 .93.93v.93h6.5a.92824.92824 0 0 1 .93.93z"/></svg>;
    },
  });