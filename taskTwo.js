// You can copy this code and paste it in any online editor. Then you'll be able to see the output.

export const dataOne = [
  {
    name: "company",
    type: "IS",
    value: ["Apple", "Google"],
  },
  {
    name: "technology",
    type: "IS",
    value: ["Javascript", "React"],
  },
  {
    name: "technology",
    type: "NOT",
    value: ["Vue", "Angular"],
  },
  {
    name: "company",
    type: "NOT",
    value: ["Microsoft", "Wipro"],
  },
  {
    name: "location",
    type: "NOT",
    value: ["Bangalore", "Chennai"],
  },
];

//Answer logic
dataOne.map((a) => {
  let typeIs;
  let typeNo;

  let typeIsForTech;
  let typeNoForTech;

  let typeNoForLocation;

  if (a.type === "IS" && a.name === "company") {
    typeIs = a.value;
  } else if (a.type === "NOT" && a.name === "company") {
    typeNo = a.value;
  } else if (a.type === "IS" && a.name === "technology") {
    typeIsForTech = a.value;
  } else if (a.type === "NOT" && a.name === "technology") {
    typeNoForTech = a.value;
  } else if (a.type === "NOT" && a.name === "location") {
    typeNoForLocation = a.value;
  }

  const answer = {
    company: {
      IS: typeIs,
      NOT: typeNo,
    },
    technology: {
      IS: typeIsForTech,
      NOT: typeNoForTech,
    },
    location: {
      NOT: typeNoForLocation,
    },
  };

  console.log(answer);
});
