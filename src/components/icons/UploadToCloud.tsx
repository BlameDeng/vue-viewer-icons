import { defineComponent, SVGAttributes } from "vue";

  export const SvgUploadToCloud = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m16 7.4a3.1156 3.1156 0 0 1 -3.1 3.1h-1.4l-3.5-4.6-3.5 4.6h-1.4a3.1156 3.1156 0 0 1 -3.1-3.1 2.94613 2.94613 0 0 1 2.6-3v-.3a1.92262 1.92262 0 0 1 2-1.9 2.10617 2.10617 0 0 1 1.3.5c.6-1.4 1.4-2.6 3.6-2.6a3.87775 3.87775 0 0 1 4 4.2v.3a2.67938 2.67938 0 0 1 2.5 2.8zm-5.6 3.1-2.4-3.1-2.4 3.1-.8 1h1.6v3.6h3.1v-3.6h1.6z"/></svg>;
    },
  });