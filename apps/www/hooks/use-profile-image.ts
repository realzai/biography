import { useState, useEffect } from "react";
import api from "~/lib/api";

export const useProfileImage = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    async function fetchImage() {
      const response = await api.get("/api/profile_picture");
      setImageUrl(response.data.url);
    }

    fetchImage();
  }, []);

  return imageUrl;
};
