import React from "react";
import Image from "next/image";

import CartIcon from "@/public/assets/images/icons/cart.svg";

interface Props {}

export const Cart: React.FC<Props> = () => {
  return (
    <div>
      <Image src={CartIcon} width={24} height={24} alt="cart" />
    </div>
  );
};
