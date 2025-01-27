const cardContainer = document.getElementById("card-container");
let cardidx = [
  {
    id: "01",
    title: "Black Tea",
    discription: "Creamer could be replaced by fresh milk",
    img: "./assets/tea-1.png",
    alt: "A cup of black tea",
    price: "10$",
  },
  {
    id: "02",
    title: "Lemon Tea",
    discription: "Creamer could be replaced by fresh milk",
    img: "./assets/tea-2.png",
    alt: "A cup of black tea",
    price: "15$",
  },
  {
    id: "03",
    title: "Milk Tea",
    discription: "Creamer could be replaced by fresh milk",
    img: "./assets/tea-3.png",
    alt: "A cup of black tea",
    price: "20$",
  },
  {
    id: "04",
    title: "Green Tea",
    discription: "Creamer could be replaced <br> by fresh milk",
    img: "./assets/tea-4.png",
    alt: "A cup of black tea",
    price: "30$",
  },
  {
    id: "05",
    title: "brand coffee",
    discription: "Creamer could be replaced <br> by fresh milk",
    img: "./assets/fresh-1.png",
    alt: "A cup of black tea",
    price: "30$",
  },
  {
    id: "06",
    title: "love coffee",
    discription: "Creamer could be replaced <br> by fresh milk",
    img: "./assets/fresh-2.png",
    alt: "A cup of black tea",
    price: "30$",
  },
];

cardidx.forEach((card) => {
  const product = `  <div
          class="card  flex justify-center items-center rounded-lg flex-col p-5 bg-gradient-to-b from-[#F4F4F4] to-[#ffffff] m-5"
        >
          <img src=${card.img} alt="${card.alt}" />
          <h2 class="font-semibold text-2xl">${card.title}</h2>
          <p class="text-[#777777] text-center">
            ${card.discription}
          </p>
          <p>Price:${card.price}</p>
                    <button
            class="text-white mt-3 p-3 bg-gradient-to-r from-[#FF8938] to-[#ff0000] hover:from-blue-300 hover:to-red-500 rounded-md hover:cursor-pointer hover:scale-[1.1] transition duration-300 ease-in-out"
          >
            Buy Now
          </button>
        </div>`;
  cardContainer.innerHTML += product;
});
