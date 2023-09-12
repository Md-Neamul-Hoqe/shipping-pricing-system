/* Calculate Total Cost */

const weightField = document.getElementById("weight");
const NumProductsField = document.getElementById("NumProducts");
const setDistrictLBtn = document.getElementById("distance");

const setPriorityBtn = document.getElementById("Priority");

const setHeightBtn = document.getElementById("Height");

const setProductsImage = document.getElementById("productsImage");
// setProductsImage.webkitdirectory = `image/*`;
const imageShow = document.getElementById("imageShow");

const Order = document.getElementById("Order");

const MaterialsField = document.getElementById("Materials");
// const showTKForDistance = document.getElementById("TKForWeightDistance");

const output = document.getElementById("output");
const distancesTo = {
  DHA: 0,
  SYL: 248,
  CHI: 295,
  KHU: 271,
  BAR: 185,
  RAJ: 258,
  RAN: 309,
  MYM: 121,
};

/* Priority Costs */
const tomorrow = 20;
const later3 = 15;
const later10 = 10;
let priority = later10;

/* Distance & Weight Cost */
let weight = 1;
const minFareFirstKG = 50;
const distanceAddChargeUpto30KM = 20;
const distanceAddChargeBeyond30KM = 0.5;
let distance = 0;
let Materials = "steel";

/* location Height Cost */
const groundFloor = 0;
const aboveGroundFloor = 2;
let floor = groundFloor;

NumProductsField.addEventListener("change", () => {
  const numOfProducts = getFieldValue("NumProducts");
  if (numOfProducts % 1) {
    alert("Please Input Integer Type Value only.");
    NumProductsField.value = Math.round(numOfProducts);
  }
});

/* Get Weight */
weightField.addEventListener("change", () => {
  weight = getFieldValue("weight");

  console.log(weight);
  /* If Out of range */
  if (weight > 40) {
    weight = 40;
    alert("The maximum weight is exceeded.");
  } else if (weight <= 0.1) {
    weight = 0.1;
    alert("The minimum requirement not filled.");
  }

  /* Set To The Field */
  weightField.value = weight;
  console.log(weightField, weightField.value);
  console.log(weight);
});

const distanceCostToShow = () => {
  /* update distance */
  const districtLocation = getFieldValue("distance");
  distance = distancesTo[districtLocation];

  /* Show Additional Distance Cost */
  document.getElementById("TKForWeightDistance").innerText =
    getDistanceCost(distance);

  console.log(distance);
};

/* Get Distance */
setDistrictLBtn.addEventListener("change", () => {});

/* Get Priority */
setPriorityBtn.addEventListener("change", () => {
  const PriorityCost = document.getElementById("TKForPriority");
  priority = getFieldValue("Priority");
  PriorityCost.innerText = priority;
});

/* Get Floor */
setHeightBtn.addEventListener("change", () => {
  const HeightCost = document.getElementById("TKForHeight");
  floor = getFieldValue("Height");
  HeightCost.innerText = floor;

  console.log(floor);
});

/* Get Materials */
MaterialsField.addEventListener("change", () => {
  Materials = getFieldValue("Materials");

  console.log(Materials);
});

/* Get Product Image */
setProductsImage.addEventListener("change", (e) => {
  console.log(e.currentTarget.files[0].name);
  console.log(File.webkitRelativePath);
  const getImage = e.currentTarget.files[0].name;
  // const getImage = e.currentTarget.files?.file?.[0]?.webkitRelativePath;
  if (!!getImage) {
    imageShow.classList.remove("hidden");
  }
  imageShow.innerHTML = `<img src="${getImage}" alt='Product Image' >`;
});

// Submit
const ParcelOrder = document.getElementById("Order");
ParcelOrder.addEventListener("click", () => {
  const btn = document.createElement("button");
  btn.setAttribute("class", "btn btn-sm text-white btn-accent");

  /* calculate total cost */
  console.log(weight, distance, priority, floor);
  const Total = calculateTheTotalCost(weight, distance, priority, floor);

  btn.innerHTML = `$${Total}`;
  output.replaceChild(btn, output.lastElementChild);
});

// const locationTracking = async () => {
//   const response = await fetch(
//     "https://porzoton.com/dhaka-to-all-district-distance/"
//   );
//   const location = await response.json();
//   console.log(location);
// };

// locationTracking();
