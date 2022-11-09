import { makeVar } from "@apollo/client";

// Apollo Local State Mangement variable
export const titleSearchedFor = makeVar<string>("");