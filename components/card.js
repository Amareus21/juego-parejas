
export default function Card ({ color, handleClick, id }) {
  
  return (
    <div
      style={{ backgroundColor:color, width: "25%", height: "100%", margin:'1rem' }}
      onClick={handleClick}
      id= {id}
    ></div>
  );
}
