"use client";

import { Review } from "@/lib/actions/products";
import React, { createContext, useContext, useState } from "react";

const useReviewState = (initialReviews: Review[]) => {
  return useState<Review[]>(initialReviews);
};

export const ReviewContext = createContext<ReturnType<
  typeof useReviewState
> | null>(null);

const ReviewProvider = ({
  reviews: initialReviews,
  children,
}: {
  reviews: Review[];
  children: React.ReactNode;
}) => {
  const [reviews, setReviews] = useReviewState(initialReviews);

  return (
    <ReviewContext.Provider value={[reviews, setReviews]}>
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;

export const useReview = () => {
  const reviews = useContext(ReviewContext);
  if (!reviews) {
    throw new Error("useReview must be used within a ReviewProvider");
  }
  return reviews;
};
