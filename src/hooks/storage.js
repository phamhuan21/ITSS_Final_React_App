import { useState, useEffect } from 'react';


function useStorage() {
  const data = ["hung","ha","hao","hoang"]
  const [index, setIndex] = useState(0);

  return [data, index];
}

export default useStorage;