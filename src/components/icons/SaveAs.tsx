import { defineComponent, SVGAttributes } from "vue";

  export const SvgSaveAs = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m7 13.8v-.41l.29-.29.1-.1h-3.39a1 1 0 0 1 -1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v.39l.35-.39.72-.68.33-.32.53-.5a1.61 1.61 0 0 1 1.07-.5v-7h-14v12l2 2h5zm-5-7.3v-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v5a.5.5 0 0 1 -.5.5h-9a.5.5 0 0 1 -.5-.5z"/><path d="m5 9a1 1 0 0 1 1 1v1a1 1 0 1 1 -2 0v-1a1 1 0 0 1 1-1"/><path d="m12.4 9.4 2.2 2.2-4.4 4.4h-2.2v-2.2m1.9 1.5.5-.5-1.25-1.25-.5.5v.55h.7v.7m3.35-4.9c0-.1-.05-.1-.1-.1s-.05 0-.1 0l-2.85 2.9a.17.17 0 0 0 0 .1c0 .1 0 .1.1.1s0 0 .1-.05l2.85-2.85a.17.17 0 0 0 0-.1m3.3-.5a.64.64 0 0 1 -.2.5l-.9.9-2.15-2.25.9-.85a.72.72 0 0 1 1 0l1.25 1.25a1.19 1.19 0 0 1 .1.45"/></svg>;
    },
  });