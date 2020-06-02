module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    fontSize: {
      'xs': ".75rem",
      "sm": ".875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "2.625rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem"
    },
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji"
      ],
      mono: [
        "SFMono-Regular",
        "Consolas",
        "Liberation Mono",
        "Menlo",
        "Courier",
        "monospace"
      ],
      display: [
        "SFPro-Display",
        "-apple-system",
        "Roboto",
        "Arial",
        "sans-serif"
      ]
    },
    boxShadow: {
      default: "0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)",
      lg: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.06)",
      xl:
        "0px 0px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px rgba(0, 0, 0, 0.1)",
      line: "0px 1px 0px rgba(0, 0, 0, 0.15);",
      none: "none"
    },
    extend: {
      colors: {
        webBlue: "hsla(220,90%,54%,1)",
        webGreen: "hsla(134,100%,24%,1)",
        webYellow: "rgba(253, 243, 189, 0.7)",
        lightBlue: "#F1F8FF",
        webPurple: "#7D2FCB",
        lightPurple: "#DCBDFA"
      }
    }
  },
  variants: {},
  plugins: []
};
