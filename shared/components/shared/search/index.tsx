import React from "react";
import Image from "next/image";

import SearchIcon from "@/public/assets/images/icons/search.svg";

interface Props {}

export const Search: React.FC<Props> = () => {
  return (
    <div>
      <Image src={SearchIcon} width={24} height={24} alt="search" />
    </div>
  );
};
