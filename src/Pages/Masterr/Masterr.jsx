// components/MasterResidents.js
import React, { useState } from "react";
import ResidentCard from "./RezCard";
import "./Masterr.css";

const residents = [
  {
    id: 1,
    name: "Askarali Karimov",
    role: "Director",
    img: "https://uzbekclub.xn--h28h.uz/media/cache/69/b6/69b6d238c8a6f58df64bcb77efe3f850.jpg",
  },
  {
    id: 2,
    name: "Ergasheva Dilshoda",
    role: "Director",
    img: "https://uzbekclub.xn--h28h.uz/media/cache/80/fd/80fdb5e517c4c73df9bd90904e77b90f.jpg",
  },
  {
    id: 3,
    name: "Bobir Akhbarov",
    role: "Businessman",
    img: "https://uzbekclub.xn--h28h.uz/media/cache/87/12/87127face01bff8de7e3256f905f0f70.jpg",
  },
  {
    id: 4,
    name: "Mushtariy Karimov",
    role: "Director",
    img: "https://uzbekclub.xn--h28h.uz/media/cache/09/9b/099b5bb76055ebd0d5d3c28a4ee169bd.jpg",
  },
  {
    id: 5,
    name: "Dmitry Dilshoda",
    role: "Director",
    img: "https://uzbekclub.xn--h28h.uz/media/cache/77/6f/776f64af2c5e568abac330a23b6cf20a.jpg",
  },
  {
    id: 6,
    name: "Madina Akhbarov",
    role: "Businessman",
    img: "https://uzbekclub.xn--h28h.uz/media/cache/6d/60/6d60f577a2c89fc59fc38a239ed9b4d6.jpg",
  },
  {
    id: 7,
    name: "Kamola Karimov",
    role: "Director",
    img: "https://uzbekclub.xn--h28h.uz/media/cache/13/36/1336c4b19f81c14637db23f9ef7cc249.jpg",
  },
  {
    id: 8,
    name: "Ergasheva Dilshoda",
    role: "Director",
    img: "https://uzbekclub.xn--h28h.uz/media/cache/5b/03/5b034c7b5563b7c522da04c3bfbcc20d.jpg",
  },
  {
    id: 9,
    name: "Bobir Akhbarov",
    role: "Businessman",
    img: "https://uzbekclub.xn--h28h.uz/media/cache/50/66/5066ea71b03929baeb7475eaba04d735.jpg",
  },

];

const MasterResidents = () => {
  const [visibleResidents, setVisibleResidents] = useState(3);

  const loadMore = () => {
    setVisibleResidents((prev) => prev + 3);
  };

  return (
    <>
      <div className="master-residents">
        {residents.slice(0, visibleResidents).map((resident) => (
          <ResidentCard key={resident.id} resident={resident} />
        ))}
      </div>
      <div>
        {visibleResidents < residents.length && (
          <button onClick={loadMore} className="load-more">
            Load more
          </button>
        )}
      </div>
    </>
  );
};

export default MasterResidents;
