import React , {useState} from 'react';
function LikeButton() {
    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!liked);
    }
  
    return (
      <div>
        <button onClick={handleClick}>{liked ? "Unlike" : "Like"}</button>
      </div>
    );
  }

  export default LikeButton;