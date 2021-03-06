import { defineComponent, SVGAttributes } from "vue";

  export const SvgInfoCircular = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8 0a8 8 0 1 0 8 8 8 8 0 0 0 -8-8zm1.2 3.2a.92336.92336 0 0 1 .997.8433q.00235.02829.003.0567a1.30936 1.30936 0 0 1 -1.3 1.2.94477.94477 0 0 1 -1-1 1.22815 1.22815 0 0 1 1.3-1.1zm-2 9.6c-.5 0-.9-.3-.5-1.7l.6-2.4c.1-.4.1-.5 0-.5-.2-.1-.9.2-1.3.5l-.2-.5a6.49722 6.49722 0 0 1 3.3-1.6c.5 0 .6.6.3 1.6l-.7 2.6c-.1.5-.1.6.1.6a2.00287 2.00287 0 0 0 1.1-.6l.3.4a5.76881 5.76881 0 0 1 -3 1.6z"/></svg>;
    },
  });