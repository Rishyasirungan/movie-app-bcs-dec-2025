import { useState } from 'react';


export function Counter({printProgress}) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className='like-progress-container'>
      <div className='counter-container'>
        <button onClick={() => setLike(like + 1)}>👍 {like}</button>
        <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button>
      </div>
      {printProgress && (<div className='progress'>
      <progress value={like} max={like + dislike}>50 %</progress>
      {like-dislike >= 10 ? <h3>Your Handsome</h3>: ""}
      </div>)}
      
    </div>
  );
}
