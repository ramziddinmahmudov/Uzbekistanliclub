import './Profile.css'
import { useState, useEffect, } from "react";

function Top6() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/public/list.json')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.profile);
      })
  }, []);

  return (
    <div className="top">
      <h1 className='profil'>Profil</h1>
      <div className='top1'>
        <div className="grid">
          {
            posts.map((user, id) =>
              <div className="card" key={id}>
                <img src={user.img} alt={user.name} />
                  <p className="name">{user.description}</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Top6;
