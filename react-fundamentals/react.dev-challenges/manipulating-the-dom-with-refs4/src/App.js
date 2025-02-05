import SearchButton from './SearchButton.js';
import SearchInput from './SearchInput.js';

import { useRef } from 'react';

export default function Page() {
  const buttonRef = useRef(null);
  return (
    <>
      <nav>
        <SearchButton onClick={() => {
          buttonRef.current.focus();
        }}/>
      </nav>
      <SearchInput ref={buttonRef}/>
    </>
  );
}
