/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
        },
        screens: {
					sm: "750px",
					md: "970px",
					lg: "1130px",
          xl: "1290px",
				},
      },
      fontSize: {
        h1: ["80px", "107.5%"],
        h2: ["52px", "111.538%"],
        h3: ["42px", "114.286%"],
        h4: ["38px", "115.789%"],
        h5: ["26px", "123.077%"],
        h6: ["22px", "127.273%"],
        p: ["18px", "138.889%"],
        16: ["16px", "normal"],
        14: ["14px", "normal"],
      },
    },
  },
  plugins: [],
};
