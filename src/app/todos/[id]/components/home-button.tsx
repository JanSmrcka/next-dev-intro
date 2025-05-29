"use client";

import { useRouter, useSearchParams } from "next/navigation";

export const HomeButton = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  console.log(search);

  function handleRedirect() {
    router.push("/");
  }

  return (
    <button onClick={handleRedirect} className="back-button">
      Back to Home
    </button>
  );
};
