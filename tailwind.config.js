module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (themes) => ({
        homepage:
          "url('https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
        lol: "url('https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
      }),
      fontFamily: {
        heading: ["Roboto Slab"],
        happiness: ["Spirax"],
        "famous-quotes": ["Lobster"],
        education: ["Pacifico"],
        friendship: ["Acme"],
        inspirational: ["Staatliches"],
        business: ["Permanent Marker"],
        religion: ["righteous"],
        future: ["Antic Slab"],
        love: ["Satisfy"],
        life: ["Tinos"],
        success: ["Cinzel"],
        proverb: ["Jost"],
        technology: ["Changa"],
        homescreen: ["Rancho"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
