import { defineComponent, SVGAttributes } from "vue";

  export const SvgImportantSmall = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m6.25 1h3.5v3.18968l-.676 6.408h-2.16419l-.65981-6.408zm.12091 10.57169h3.26665v3.42831h-3.26665z"/></svg>;
    },
  });