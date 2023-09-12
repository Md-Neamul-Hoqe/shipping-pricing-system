/* Get Field Values */
const getFieldValue = (fieldId) => {
  const field = document.getElementById(fieldId);
  const fieldValue = field.value;
  const value = isNaN(fieldValue) ? fieldValue : parseFloat(fieldValue);
  return value;
};

/* calculate distance cost */
const getDistanceCost = (distance) => {
  return distance < 30 && weight <= 1
    ? minFareFirstKG
    : distance < 30 && weight > 1
    ? minFareFirstKG + distanceAddChargeUpto30KM * (weight - 1)
    : minFareFirstKG + distanceAddChargeBeyond30KM * (weight - 1) * distance;
};

function calculateTheTotalCost(
  weight = 0.1,
  distance = 0,
  priority = later10,
  locationHeight = 0
) {
  let cost = 0;

  /* Distance & Weight Addition */

  console.log(`At start the cost is ${cost}`);
  //   if (distance <= 30) {
  //     if (weight <= 1) cost = weight * minFareFirstKG;
  //     else if (weight > 1) cost = weight * distanceAddChargeUpto30KM;
  //   } else {
  //     cost = distance * weight * distanceAddChargeBeyond30KM;
  //   }
  cost += getDistanceCost(distance);
  console.log(
    `After weight ${weight} & distance ${distance} in concern, the cost is ${cost}`
  );

  /* Priority Addition */

  switch (priority) {
    case "20":
      cost += tomorrow;
      break;
    case "15":
      cost += later3;
      break;
    default:
      cost += later10;
      break;
  }
  console.log(
    `After priority ${priority} days later in concern, the cost is ${cost}`
  );

  /* Location height Addition */

  switch (locationHeight) {
    case 2:
      cost += aboveGroundFloor;
      break;

    default:
      break;
  }

  console.log(`After floor ${locationHeight} in concern, the cost is ${cost}`);
  const TOTALCost = cost;
  return cost;
}
