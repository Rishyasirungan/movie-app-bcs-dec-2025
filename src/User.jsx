import { Counter } from "./Counter";

export function User({ name, url }) {
  return (
  <div className='user-container'>
    <img src={url} alt="userimage" className="user-pic"/>
    <p className="user-greeting">
      Hello <span className="user-name">{name}</span>👤
    </p>
    {<Counter printProgress={true}/>}
  </div>
  );
}
