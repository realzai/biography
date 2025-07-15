"use client";

import React, { FC } from "react";
import Image from "next/image";
import { useProfileImage } from "~/hooks/use-profile-image";

export const ProfileImage: FC = () => {
  const imageUrl = useProfileImage();

  return (
    <Image src={imageUrl} alt={"Zai"} layout={"fill"} objectFit={"cover"} />
  );
};
