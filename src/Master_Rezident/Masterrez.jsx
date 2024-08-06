import "./Masterrez.css"
import { useState, useEffect, } from "react";

function Top6() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://tfeemydipxlrphrakfuo.supabase.co/storage/v1/object/sign/gaery/list.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWVyeS9saXN0Lmpzb24iLCJpYXQiOjE3MjI5MzM4NTksImV4cCI6MTc1NDQ2OTg1OX0.LpvZjUiyjK6BjSCyAX7AnfKOrWAV6vGkXKGldqZiIoY&t=2024-08-06T08%3A44%3A16.251Z')
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
