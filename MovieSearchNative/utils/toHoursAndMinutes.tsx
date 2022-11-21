/**
 * Help function to calculate minutes in to hours and minutes
 * @param runtime number of minutes in movie
 */
export function toHoursAndMinutes(runtime: number) {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return hours + "h " + minutes + " min";
}