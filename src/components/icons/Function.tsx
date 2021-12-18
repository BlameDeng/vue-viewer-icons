import { defineComponent, SVGAttributes } from "vue";

  export const SvgFunction = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m15.2 10.23784c-.93862-.01333-.75483 1.24517-1.1.9a5.39941 5.39941 0 0 1 -1.2-3.4c0-.43.84911-1.635 1.6-1.4.47108.1474 1.5-.13495 1.5-.9 0-1.00839-.7-1-1-1a2.51267 2.51267 0 0 0 -1.4.6 4.74056 4.74056 0 0 0 -1 1 1.03721 1.03721 0 0 0 -1.1-1.2l-4.1.1s.20233-2.18759 1.2-2.7a1.541 1.541 0 0 1 1.50511.11053c1.22973.55405 2.34646-1.75013-.50511-2.01053-2.40029-.2192-3.53542 1.5781-4.2 4.6h-1.7l-.4 1.5h1.7s-1.19122 5.74267-1.9219 6.66726c-.43132.54579-1.9781.13274-1.9781.13274a.97793.97793 0 0 0 -1.1 1c0 .3.06459 1.1 1.4 1.1 3.51593 0 4.124-2.53 4.6-4.6l1-4.3h3.83484l.16516 1.7s-1.6 2.1-1.7 2.2a1.07539 1.07539 0 0 0 -1.4-.2 1.0597 1.0597 0 0 0 -.1 1.5s1.67 1.3997 3.6-1.7c.3.7.75519 2.7 2.8 2.7 2.18284 0 2.137-2.38384 1-2.4z"/></svg>;
    },
  });