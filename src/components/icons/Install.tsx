import { defineComponent, SVGAttributes } from "vue";

  export const SvgInstall = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m15.11 2h-5.11v1h5v8h-14v-8h5v-1h-5a.96126.96126 0 0 0 -1 1v9a1.05952 1.05952 0 0 0 1 1h6v2c-.6.09-1.7 1-1 1h4c.7 0-.41-.91-1-1v-2h6a.97532.97532 0 0 0 1-.96v-9.04a.94908.94908 0 0 0 -.89-1zm-4.11 4h-2v-6h-2.0006v6h-1.9994l3 4z"/></svg>;
    },
  });