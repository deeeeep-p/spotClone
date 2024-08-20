import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";
const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  console.log(albumId);
  const bgColor = albumsData[Number(albumId)].bgColor;
  console.log(bgColor);
  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  });
  return (
    <div
      ref={displayRef}
      className="pl-4 w-[100%] bg-[#121212] rounded text-white overflow-auto mt-1 lg:w-[75%] "
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
