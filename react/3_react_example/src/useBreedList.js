// import { useState, useEffect } from "react";
// import fetchAPI from "./fetchAPI";
// const localCache = {};

// export default function useBreedList(animal) {
//     const [breedList, setBreedList] = useState([]);
//     const [status, setStatus] = useState("unloaded");

//     useEffect(() => {
//         if(!animal) {
//             setBreedList([]);
//         } else if(localCache[animal]) {
//             setBreedList(localCache[animal]);
//         } else {
//             requestBreedList();
//         }

//         async function requestBreedList() {
//             setBreedList([]);
//             setStatus("loading");

//             localCache[animal] = await fetchAPI.requestBreedList(animal);

//             setBreedList(localCache[animal]);
//             setStatus("loaded");
//         }
//     }, [animal]);
//     return [breedList, status];
// }
// using react query simplifies a lot
import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status];
}
