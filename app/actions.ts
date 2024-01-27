"use server";

export async function computeMadLib(prevState: unknown, formData: FormData) {
  const name = formData.get("name")?.toString();
  const dateOfBirth = formData.get("dateOfBirth")?.toString();
  const favoriteFood = formData.get("favoriteFood")?.toString();
  return {
    name: name,
    dateOfBirth: dateOfBirth,
    favoriteFood: favoriteFood,
  };
}
