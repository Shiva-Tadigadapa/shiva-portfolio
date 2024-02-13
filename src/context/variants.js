// variants.js
export const getVariants = (mousePosition) => ({
  default: {
    x: mousePosition.x - 10,
    y: mousePosition.y - 5,
  },
  text: {
    height: 100,
    width: 100,
    x: mousePosition.x - 40,
    y: mousePosition.y - 40,
    backgroundColor: "white",
    mixBlendMode: "difference",
  },
});
