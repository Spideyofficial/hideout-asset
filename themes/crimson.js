// Crimson Theme for Hideout
(function() {
  const theme = {
    name: "Crimson",
    colors: {
      background: "0 20% 8%",
      foreground: "0 10% 95%",
      card: "0 18% 12%",
      "card-foreground": "0 10% 95%",
      popover: "0 20% 8%",
      "popover-foreground": "0 10% 95%",
      primary: "350 85% 55%",
      "primary-foreground": "0 0% 100%",
      secondary: "0 15% 15%",
      "secondary-foreground": "0 10% 95%",
      muted: "0 15% 15%",
      "muted-foreground": "0 10% 65%",
      accent: "10 80% 50%",
      "accent-foreground": "0 0% 100%",
      destructive: "0 62.8% 30.6%",
      "destructive-foreground": "0 0% 100%",
      border: "0 18% 20%",
      input: "0 18% 20%",
      ring: "350 85% 55%"
    },
    customEffects: null
  };

  // Apply colors
  const root = document.documentElement;
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });

  console.log(`Hideout theme loaded: ${theme.name}`);
})();
