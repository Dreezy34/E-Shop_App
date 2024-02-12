"use client";

import moment from "moment";
import Heading from "../../component/Heading";
import Product from "./page";
import { Avatar, Rating } from "@mui/material";

interface ListRatingProps {
  product: any;
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  if (product.review.length === 0) return null;
  return (
    <div>
      <Heading title="Product Review" />
      <div className="text-sm mt-1">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div key={review.id} className="max-w-300px">
                <div className="flex gap-2 items-center">
                  <Avatar src={review.user.image} />
                  <div className="font-semibold">{review?.user.name}</div>
                  <div className="font-light">
                    {moment(review.createdDate).fromNow()}
                  </div>
                </div>
                <div className=" mt-2"></div>
                <Rating value={review.rating} readOnly />
                <div className="ml-2">{review.comment}</div>
                <hr className="mt-4 mb-4" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListRating;
