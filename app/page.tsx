"use client";

import { useFormState } from "react-dom";
import { computeMadLib } from "./actions";

export default function Home() {
  const [state, formAction] = useFormState(computeMadLib, null);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {state ? (
        <p>
          {state.name} was born on {state.dateOfBirth} and loves{" "}
          {state.favoriteFood}.
        </p>
      ) : (
        <form action={formAction} className="flex flex-col gap-y-2">
          <input
            type="text"
            className="border-2 border-gray-300 p-2"
            placeholder="name"
            name="name"
          />
          <label>
            birth date
            <input
              type="date"
              className="border-2 border-gray-300 p-2"
              placeholder="date of birth"
              name="dateOfBirth"
            />
          </label>
          <input
            type="text"
            className="border-2 border-gray-300 p-2"
            placeholder="favorite food"
            name="favoriteFood"
          />
          <input type="submit" className="border-2 border-gray-300 p-2" />
        </form>
      )}
    </main>
  );
}
