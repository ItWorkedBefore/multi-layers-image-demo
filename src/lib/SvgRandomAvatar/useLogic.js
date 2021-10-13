import {useState, useEffect} from 'react';
import {superpose} from 'multi-layers-image';

const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const lib = [
  {name: 'background', qty: 10},
  {name: 'neck', qty: 3},
  {name: 'body', qty: 16},
  {name: 'ears', qty: 9},
  {name: 'face', qty: 3},
  {name: 'eyebrows', qty: 18},
  {name: 'hair', qty: 30},
  {name: 'beard', qty: 30},
  {name: 'mouth', qty: 3},
  {name: 'eyes', qty: 4},
  {name: 'nose', qty: 9},
  {name: 'glasses', qty: 10},
  {name: 'piercing', qty: 6},
];

const useLogic = initialState => {
  const [avatar, setAvatar] = useState(undefined);

  const layers = lib.map(({name, qty}) => {
    const id = Math.floor(Math.random() * qty);
    return `/assets/svg/${name}/${id}.svg`;
  });

  useEffect(() => {
    (async () => {
      setAvatar(
        await superpose(layers, {
          width: 250,
          height: 250,
          mimetype: 'image/svg+xml',
        })
      );
    })();
  }, []);

  return {
    avatar,
  };
};

export default useLogic;
