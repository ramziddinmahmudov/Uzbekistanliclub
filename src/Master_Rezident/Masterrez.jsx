import "./Masterrez.css"
import { useState, useEffect, } from "react";

function Top6() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/public/list.json')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.masterresident);
      })
  }, []);

  return (
    <div className="top">
      <h1 className='profil1'>Naster Rezedint</h1>
      <div className='top1'>
        <div className="grid1">
          {
            posts.map((user, id) =>
              <div className="card" key={id}>
                <img src={user.img} alt={user.name} />
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Top6;
