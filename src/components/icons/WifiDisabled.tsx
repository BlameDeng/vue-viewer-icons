import { defineComponent, SVGAttributes } from "vue";

  export const SvgWifiDisabled = defineComponent<SVGAttributes>({
    setup() {
      return () => <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m15.53 9.88-1.41-1.41-2.12 2.12-2.12-2.12-1.42 1.41 2.13 2.12-2.13 2.12 1.42 1.41 2.12-2.12 2.12 2.12 1.41-1.41-2.12-2.12zm-7.04-1.44a4.31271 4.31271 0 0 0 -3.9 1.64c-.31923.367.366.7717.55 1.01a.33226.33226 0 0 0 .27.11.353.353 0 0 0 .26-.15 2.91831 2.91831 0 0 1 1.13-.9zm-.48 3.56a.9969.9969 0 0 0 -.61 1.77c.23888-.239 1.12559-1.1256 1.38-1.38a1.00616 1.00616 0 0 0 -.77-.39zm7.9-6.48a10.728 10.728 0 0 0 -15.82 0 .35919.35919 0 0 0 .02.5c.16115.11953.53523.6392.77.61a.27876.27876 0 0 0 .25-.12 9.27262 9.27262 0 0 1 13.74.02.48728.48728 0 0 0 .25.12.32506.32506 0 0 0 .25-.11l.52-.52a.35913.35913 0 0 0 .02-.5zm-3.09 1.6a7.37306 7.37306 0 0 0 -10.39.75.34735.34735 0 0 0 .02.49c.23837.19622.6882.93262 1.03.5 2.39757-2.92859 6.775-2.45067 8.95-.12l1.01-1.01a5.95743 5.95743 0 0 0 -.62-.61z"/></svg>;
    },
  });