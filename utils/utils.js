 export function getColorsRandom() {
    const arrayColors = [
      "blue",
      "pink",
      "green",
      "yellow",
      "red",
      "brown",
      "orange",
      "violet",
    ];

    function getObjectRandom() {
      const array1 = [...arrayColors, ...arrayColors];
      function random(num) {
        return Math.floor(Math.random() * num);
      }
      const colors = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ];
      for (let i = 0; i < colors.length; i++) {
        const num = random(array1.length);
        colors[i] = array1[num];
        array1.splice(num, 1);
      }
      return colors;
    }
    return getObjectRandom();
}

export const colorsPrimary = [
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
  ];