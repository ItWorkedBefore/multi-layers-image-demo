import {useState, useEffect} from 'react';
import {superpose} from 'multi-layers-image';

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

const getRandomLayers = () =>
  lib.map(({name, qty}) => {
    const id = Math.floor(Math.random() * qty);
    return `/assets/svg/${name}/${id}.svg`;
  });

const useLogic = initialState => {
  const [avatar, setAvatar] = useState(undefined);

  useEffect(() => {
    (async () => {
      setAvatar(
        await superpose(getRandomLayers(), {
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
