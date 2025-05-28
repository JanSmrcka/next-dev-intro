"use client";
import { useRouter } from "next/navigation";

export const HomeButton = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <button onClick={handleRedirect} className="back-button">
      Back to Home
    </button>
  );
};
