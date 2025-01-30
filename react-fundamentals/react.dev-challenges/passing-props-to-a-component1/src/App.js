import { getImageUrl } from './utils.js';

export function Profile({ nombre, imagen, profesion, premios, descubrimiento }){
  return (
    <section className="profile">
        <h2>{nombre}</h2>
        <img
          className="avatar"
          src={getImageUrl(imagen)}
          alt={nombre}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {profesion}
          </li>
          <li>
            <b>Awards: {premios.length} </b> 
            ({premios.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {descubrimiento}
          </li>
        </ul>
      </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        nombre="Maria Skłodowska-Curie"
        imagen="szV5sdG"
        profesion="physicist and chemist"
        premios={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
        descubrimiento="polonium (chemical element)"
      />
      <Profile
        nombre="Katsuko Saruhashi"
        imagen="YfeOqp2"
        profesion="geochemist"
        premios={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
        descubrimiento="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
