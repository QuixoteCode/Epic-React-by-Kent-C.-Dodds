import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  let tamanioMiniatura = 's';
  if (size > 90) {
    tamanioMiniatura = 'b';
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person, tamanioMiniatura)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={160}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}
