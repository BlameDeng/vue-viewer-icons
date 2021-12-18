import { defineComponent, SVGAttributes } from "vue";

  export const SvgScreenshareStop = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m6.85352 13.14648a.5.5 0 0 1 -.69471.71929l-.01229-.01229-2.64652-2.64648-2.64648 2.64652a.5.5 0 0 1 -.707-.707l2.64648-2.64652-2.64652-2.64648a.5.5 0 1 1 .69472-.71928l.01228.01228 2.64652 2.64648 2.64648-2.64652a.5.5 0 0 1 .707.707l-2.64648 2.64652zm1.14648-.14648v1h8v-12h-16v4h1v-3h14v10z"/></svg>;
    },
  });