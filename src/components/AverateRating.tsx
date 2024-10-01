"use client";

import { useReview } from "@/contexts/ReviewContext";

export default function AverateRating() {
  const [reviews] = useReview();
  return (
    <>
      {reviews && reviews?.length && (
        <div className="mt-4 font-light">
          Average Rating:{" "}
          {(
            reviews?.reduce((a, b) => a + b.rating, 0) / reviews?.length
          ).toFixed(1)}
        </div>
      )}
    </>
  );
}
