"use client";

import { addReview, Review as Reviews } from "@/lib/actions/products";
import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Review({
  reviews,
  id,
}: {
  reviews: Reviews[];
  id: number;
}) {
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);

  const addReviewAction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addReview(id, reviewRating, reviewText);
    setReviewText("");
    setReviewRating(5);
  };

  return (
    <div className="mb-5 flex w-full flex-col gap-5">
      {reviews?.map((review, index) => (
        <div key={index} className="flex flex-col space-y-3 p-5">
          <div className="text-base leading-5">{review.rating} stars</div>
          <div className="text-sm font-light italic leading-5">
            {review.text}
          </div>
        </div>
      ))}

      <h1 className="text-2xl font-bold">Review</h1>
      <form onSubmit={addReviewAction}>
        <div className="mb-5 flex gap-2">
          <input type="hidden" name="id" value={id} />
          <Input
            className="grow"
            name="text"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <Input
            type="number"
            className="w-20"
            name="rating"
            min={1}
            max={5}
            value={reviewRating}
            onChange={(e) => setReviewRating(+e.target.value)}
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={!reviewText}>
            Submit Review
          </Button>
        </div>
      </form>
    </div>
  );
}
