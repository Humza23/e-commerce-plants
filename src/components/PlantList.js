import React, { Component } from "react";

const plantsData = [
  {
    name: "Peperomia Rosso",
    id: 143,
    scientificName: "Peperomia caperata rosso",
    difficulty: "easy",
    light: "direct",
    img:
    "http://cdn.shopify.com/s/files/1/0285/8385/4115/products/1-Peperomia-Rosso-4MAIN_1800x1800_88f3d5ba-a35d-4633-a7c2-224da7c3eb82_grande.jpg?v=1615407552",
    sizes: ["small"],
    watering: 2,
    description:
      "Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.",
    price: 21,
  },
  {
    name: "String of Dolphins",
    id: 125341,
    scientificName: "Senecio peregrinus",
    difficulty: "easy",
    light: "direct",
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_DOLPHINS-1_800x.png?v=1587613674",
    sizes: ["small"],
    watering: 2,
    description:
      "Flipper's trailing stems are full of glossy succulent leaves, reminiscent to a pod of breaching dolphins. Flipper hails from South Africa, so he thrives in warm environments with lots of sun. This dolphin doesn't need too much water to thrive, making him low maintenance and easy to love.",
    price: 15,
  },
  {
    name: "Snake Plant",
    id: 4893,
    scientificName: "Sansevieria zeylanica",
    difficulty: "easy",
    light: "direct",
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/6__SANSEVIERIA_ZEYLANICA-1_800x.png?v=1587146468",
    sizes: ["small", "medium"],
    watering: 2,
    description:
      "One of the most popular and hardy of houseplants, he's virtually indestructible and adaptable to almost any condition. Whether you throw full, direct sunlight at him or shove him in the low-light corner of your apartment, he'll grow. And to top it off, he'll go weeks without water if he must.",
    price: 18,
  },
  {
    name: "ZZ Plant",
    id: 48563,
    scientificName: "Zamioculcas zamiifolia",
    difficulty: "easy",
    light: "direct",
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/6__ZZ-1_800x.png?v=1587411408",
    sizes: ["small", "medium"],
    watering: 2,
    description:
      "He's able to go without water for weeks on end and can survive in almost any light condition. As wildly successful as he is, he stays true to his roots and can often be seen basking in the streets of Brooklyn reminiscing about the good ole' days over at Plant-A-Fella Records.",
    price: 18,
  },
  {
    name: "Jade Plant",
    id: 498697,
    scientificName: "Crassula ovata",
    difficulty: "easy",
    light: "direct",
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_JADE-1_800x.png?v=1587153094",
    sizes: ["small"],
    watering: 2,
    description:
      "Originally from South Africa, Jade loves sun-drenched beaches, the occasional surf, and sandy soils. Too much water too often doesn't sit well with her, so maybe offer her a beer? (Please don't give your plants beer).",
    price: 15,
  },
  {
    name: "Rabbit Foot Fern",
    id: 967391,
    scientificName: "Davallia fejeensis",
    difficulty: "medium",
    light: "indirect",
    img:
    "https://cdn.shopify.com/s/files/1/0114/6735/8272/products/Black_Ceramic_Rabbits_foot_fern_compressed.jpg?v=1597240240",
    sizes: ["small"],
    watering: 4,
    description:
      "Fortuna is a beautiful, resilient fern with furry rhizomes that resemble that of a rabbit’s foot. If luck hasn't been on your side when raising plants, Fortuna may be the one to finally break that streak.",
    price: 22,
  },
  {
    name: "Peace Lily",
    id: 2358,
    scientificName: "Spathiphyllum wallisii",
    difficulty: "medium",
    light: "low",
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/6__SPATH_PEACELILY-1_800x.png?v=1587653193",
    sizes: ["small", "medium"],
    watering: 6,
    description:
      "Don't let the 'peace' part fool you—she's here to grab your attention by the horns with her lush leaves, pearly white blooms, and air filtering prowess. She might need more attention than others, but like they say, nothing good comes easy.",
    price: 26,
  },
  {
    name: "Staghorn Fern",
    id: 67148,
    scientificName: "Platycerium bifurcatum",
    difficulty: "medium",
    light: "indirect",
    img:
    "https://cdn.shopify.com/s/files/1/0114/6735/8272/products/Staghorn_Fern_White_Pot_Compressed.jpg?v=1597247489",
    sizes: ["small"],
    watering: 2,
    description:
      "Originally from South Africa, Jade loves sun-drenched beaches, the occasional surf, and sandy soils. Too much water too often doesn't sit well with her, so maybe offer her a beer? (Please don't give your plants beer).",
    price: 15,
  },
];


export default class PlantList extends Component {
  state = {
    plants: [],
    }

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  componentDidMount() {
        this.setState({
          plants: plantsData
        })
      }

  render() {
    return (
      <main className="plant-list">
        {this.state?.plants?.map((plant) => (
          <div className="plant-card" key={plant.id} data-testid="plant-card">
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p> <span role="img" aria-label="sunlight"> ☀️ </span> {plant.light}</p>
                <p> <span role="img" aria-label="water"> 💦 </span> {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
