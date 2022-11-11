import { makeVar } from "@apollo/client";

// Apollo Local State Mangement variables
export const titleSearchedFor = makeVar<string>("");
export const selectedGenre = makeVar<string>("");
export const selectedSorting = makeVar<string>("");