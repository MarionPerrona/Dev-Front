import Avatar from './Avatar'
import Button from './Button'

export default function Avatar2() {
  return (
    <main className="maClasse">
      <h1 className="Title">HEDY LAMARR'S TODOS</h1>
      <div className="boite">
        <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
        </ul>
        <Avatar />
      </div>
      <Button />
    </main>
  );
}