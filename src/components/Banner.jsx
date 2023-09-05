export default function Banner() {
  const title = 'Panier';
  const Monstera = 8;
  const Lierre = 10;
  const Fleurs = 15;
  return (
    <>
      <h1>{title.toUpperCase()}</h1>
      <ul>
        <li>Monstera : {Monstera}€</li>
        <li>Lierre : {Lierre}€</li>
        <li>Fleurs : {Fleurs}€</li>
      </ul>
      <p>Total = {Monstera + Lierre + Fleurs}€</p>
    </>
  );
}