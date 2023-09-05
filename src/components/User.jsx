export default function User({name, classe, url, age, food}) {
  return (
    <main className="main">
      <div className="name">
        Hi, my name is {name}! Je suis {classe}
      </div>
      <img className="avatar" src={url} />
      <p className="age">Age : {age}</p>
      <p className="food">Favorite Food : {food}</p>
    </main>
  );
}