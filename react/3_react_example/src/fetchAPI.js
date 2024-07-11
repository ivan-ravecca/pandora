async function requestBreedList(animal) {
  const result = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  const json = await result.json();
  return json.breeds || [];
}

async function requestPets(animal, location, breed) {
  const response = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  const json = await response.json();
  return json.pets || [];
}
export default {
  requestBreedList,
  requestPets,
};
