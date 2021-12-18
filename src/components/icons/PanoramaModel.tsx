import { defineComponent, SVGAttributes } from "vue";

  export const SvgPanoramaModel = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8 5.48-4.86 2.05v6.14l4.88 2.33 4.83-2.47v-6zm-.25 9.61-3.86-1.91v-4.93l3.86 1.64zm-3.49-7.23 3.74-1.56 3.78 1.59-.05.02-3.71 1.56zm7.84 5.22-3.82 2.01v-5.19l3.82-1.61zm3.9-12.08v12l-2.15-.44v-1.02l1.14.24005v-9.56005l-3 .6v3.26l-1-.42v-2.66h-6l.01 2.66-1 .42-.01-3.26-3-.6v9.56l1.15-.24v1.02l-2.14.44v-12l4.99 1h6z"/></svg>;
    },
  });