import { QueryFunction } from "@tanstack/react-query";
import { Animal, BreedListAPIREsponse } from "./APIResponsesTypes";

const fetchBreedList: QueryFunction<BreedListAPIREsponse, ["breeds", Animal]> = async ({queryKey}) => {
  const animal = queryKey[1];
  
  const apiRes = await fetch(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`);

  if (!apiRes.ok) {
    throw new Error(`breeds/${animal} fetch not ok`);
  }

  return apiRes.json();
}

export default fetchBreedList;