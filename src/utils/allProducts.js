import Shoe1 from '../assets/bigShoes/image-1.svg';
import Shoe2 from '../assets/bigShoes/image-2.svg';
import Shoe3 from '../assets/bigShoes/image-3.svg';
import Shoe4 from '../assets/bigShoes/image-4.svg';
import Shoe5 from '../assets/BigChoes.png';

import allColors from './allColors';
const Allshoes = {
  shoe1: {
    img: Shoe1,
    name: "Air Max Pegasus",
    price: "$150",
    rate: 4.2,
    color: allColors.rose,
  },
  shoe2: {
    img: Shoe2,
    name: "Air Max 90 FlyEase",
    price: "$180",
    rate: 4.8,
    color: allColors.bleuClair,
  },
  shoe3: {
    img: Shoe3,
    name: "Air max 270 React SE",
    price: "$200",
    rate: 4.5,
    color: allColors.vertClair,
  },
  shoe4: {
    img: Shoe4,
    name: "Men’s Basketball Shoe",
    price: "$160",
    rate: 4,
    color: allColors.bleuFonce,
  },
  shoe5: {
    img: Shoe5,
    name: "Air Max III",
    price: "$150",
    rate: 4.2,
    color: allColors.gris,
  },
};

export default Allshoes;

