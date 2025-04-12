import { useState } from "react";

export const useBid = () => {
  const [isBidding, setIsBidding] = useState(false);

  const placeBid = async () => {
    setIsBidding(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate async bid
    setIsBidding(false);
    alert("Bid placed successfully!");
  };

  return { placeBid, isBidding };
};
