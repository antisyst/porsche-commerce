
export type Car = {
  id: number;
  name: string;
  abbreviation: string;
  price: string;
  year: string;
  miles: string;
  color: string;
  image: string[];
  swiper: string[];
  interior: string;
  fuel: string;
  drivetrain: string;
  range: string;
  battery: number;
  horsepower: number;
  torque: number;
};

const cars: Car[] = [
    {
      id: 1,
      name: "Porsche Taycan",
      abbreviation: "taycan-model",
      price: "107,720",
      year: "2023",
      miles: "0",
      color: "black",
      image: [
        "https://vehicle-images.dealerinspire.com/6202-11002722/WP0AA2Y14PSA14205/66b448749b79e962ce719a9b11a6670b.jpg"    ],
    swiper: [
      "https://vehicle-images.dealerinspire.com/6202-11002722/WP0AA2Y14PSA14205/66b448749b79e962ce719a9b11a6670b.jpg",
      "https://vehicle-images.dealerinspire.com/b888-11002722/WP0AA2Y14PSA14205/bc44ae60289524910546a764c8f9992e.jpg",
      "https://vehicle-images.dealerinspire.com/d785-11002722/WP0AA2Y14PSA14205/a78e4e2d6d2cd7490f024e10fc66af56.jpg",
      "https://vehicle-images.dealerinspire.com/cd27-11002722/WP0AA2Y14PSA14205/747f4658abac72b81d970664a52744f8.jpg",
      "https://vehicle-images.dealerinspire.com/02b3-11002722/WP0AA2Y14PSA14205/e3fd8b70d13aceba97917a7ab2f3ca13.jpg",
      "https://vehicle-images.dealerinspire.com/13c9-11002722/WP0AA2Y14PSA14205/00ec7fcd91ab37dd692f4ad4fe7233f7.jpg"
    ],
    interior: "Standard Interior in Black",
    fuel: "78 CITY / 88 HWY",
    drivetrain: "Rear Wheel Drive",
    range: "200 mi",
    battery: 79.2,
    horsepower: 402,
    torque: 254
    },
    {
      id: 2,
      name: "Porsche Taycan 4S",
      abbreviation: "taycan-4s",
      price: "151,160",
      year: "2024",
      miles: "0",
      color: "black",
      image: [
        "https://vehicle-images.dealerinspire.com/07bf-11002722/WP0AB2Y16RSA35007/82e3d66f900e9af179dab776ef6a6240.jpg"    ],
        swiper: [
          "https://vehicle-images.dealerinspire.com/6202-11002722/WP0AA2Y14PSA14205/66b448749b79e962ce719a9b11a6670b.jpg",
          "https://vehicle-images.dealerinspire.com/b888-11002722/WP0AA2Y14PSA14205/bc44ae60289524910546a764c8f9992e.jpg",
          "https://vehicle-images.dealerinspire.com/7537-11002722/WP0AB2Y16RSA35007/d1d5bc1733b6bd0991a8c5057aebfbec.jpg",
          "https://vehicle-images.dealerinspire.com/cd27-11002722/WP0AA2Y14PSA14205/747f4658abac72b81d970664a52744f8.jpg",
          "https://vehicle-images.dealerinspire.com/06cc-11002722/WP0AB2Y16RSA35007/441f4c073e43cece84659086ed86c944.jpg",
          "https://vehicle-images.dealerinspire.com/7991-11002722/WP0AB2Y16RSA35007/4fdb8a600f8ba3a4db17c78909f6c2c1.jpg"
        ],
        interior: "Leather Interior in Black",
        fuel: "3 CITY / 2 HWY",
        drivetrain: "All Wheel Drive",
        range: "491 mi",
        battery: 79.2,
        horsepower: 563,
        torque: 472
    },
    {
      id: 3,
      name: "Porsche Taycan 4 Cross Turismo",
      abbreviation: "taycan-4s-cross-turismo",
      price: "129,810",
      year: "2023",
      miles: "0",
      color: "white",
      image: [
        "https://vehicle-images.dealerinspire.com/60d7-11002722/WP0BA2Y13PSA60712/1ce4a52f0b13e66348877163a61f0add.jpg"    ],
        swiper: [
          "https://vehicle-images.dealerinspire.com/60d7-11002722/WP0BA2Y13PSA60712/1ce4a52f0b13e66348877163a61f0add.jpg",
          "https://vehicle-images.dealerinspire.com/66df-11002722/WP0BA2Y13PSA60712/bf3b9cf9fd227944a744f9410599c818.jpg",
          "https://vehicle-images.dealerinspire.com/e8e7-11002722/WP0BA2Y13PSA60712/a4d56d7ceb0ad3b2eeea35d9b6d21bb4.jpg",
          "https://vehicle-images.dealerinspire.com/0463-11002722/WP0BA2Y13PSA60712/bf32c84e4731bb260de197369e9328ae.jpg",
          "https://vehicle-images.dealerinspire.com/8a42-11002722/WP0BA2Y13PSA60712/bd4942c93ea0bfb9bf39d8f56abe7542.jpg",
          "https://vehicle-images.dealerinspire.com/add0-11002722/WP0BA2Y13PSA60712/009b8d88db4c787bc08a4ede0c4757d7.jpg"
        ],
        interior: "Standard Interior in Black",
        fuel: "80 CITY / 80 HWY",
        drivetrain: "All Wheel Drive",
        range: "235 mi",
        battery: 83.7,
        horsepower: 375,
        torque: 254
    }
  ];
  export default cars;