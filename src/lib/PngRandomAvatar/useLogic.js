import {useState, useEffect} from 'react';
import {superpose} from 'multi-layers-image';

const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const lib = [
  {name: 'layout', qty: 10},
  {name: 'faceStuff', qty: 10},
  {name: 'color', qty: 10},
  {name: 'eyes', qty: 10},
  {name: 'frontDecoration', qty: 10},
  {name: 'mouth', qty: 10},
];

const getRandomLayers = () =>
  lib.map(({name, qty}) => {
    const id = randomIntFromInterval(1, qty); // Doesn't use the image "0"
    return name === 'layout'
      ? `/assets/png/${name}/F${id}.png`
      : `/assets/png/${name}/${id}.png`;
  });

const useLogic = initialState => {
  const [avatar, setAvatar] = useState(undefined);

  useEffect(() => {
    (async () => {
      setAvatar(
        await superpose(getRandomLayers(), {
          width: 250,
          height: 250,
          mimetype: 'image/png',
        })
      );
    })();
  }, []);

  return {
    avatar,
  };
};

export default useLogic;
