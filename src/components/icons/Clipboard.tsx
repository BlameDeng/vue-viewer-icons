import { defineComponent, SVGAttributes } from "vue";

  export const SvgClipboard = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m11.1 1.5v-.2c0-.1 0-.1-.1-.1h-1.6v-1.2h-3v1.2h-1.6c-.1 0-.1 0-.1.1v.2h-2.7v14.5h12v-14.5zm1.9 13.5h-10v-13h1.7v.6c0 .1 0 .1.1.1h6.2c.1 0 .1 0 .1-.1v-.6h1.9z"/></svg>;
    },
  });