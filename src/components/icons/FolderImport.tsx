import { defineComponent, SVGAttributes } from "vue";

  export const SvgFolderImport = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m0 15c1.5-1.5 3-3.1 6-3v2.1l5-3.5-5-3.6v2a6.07984 6.07984 0 0 0 -6 6m16-12.21v7.42a.93469.93469 0 0 1 -.93.93h-3.1l.76-.53-7.73-5.56v3.03a7.05964 7.05964 0 0 0 -2 .62v-7.77a.93465.93465 0 0 1 .93-.93h3.71a.92825.92825 0 0 1 .93.93v.93h6.5a.92824.92824 0 0 1 .93.93z"/></svg>;
    },
  });