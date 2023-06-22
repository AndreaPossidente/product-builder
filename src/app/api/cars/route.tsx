import { NextResponse } from "next/server";

export async function GET() {
  const dummyData = [
    {
      id: "product-01",
      manufacturer: "BMW",
      model: "i3",
      price: 42400,
      currency: "$",
      defaultImage: "/assets/images/product01_col01.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed laboriosam ratione nulla atque molestias at explicabo aperiam reprehenderit culpa nihil, quis totam cupiditate dolores in quisquam magnam inventore nobis, rem adipisci eveniet illum.",
      colors: [
        {
          id: "col1",
          name: "White",
          color: "white",
          image: "/assets/images/product01_col01.jpg",
          price: 0,
          currency: "$",
        },
        {
          id: "col2",
          name: "Mineral Grey",
          color: "grey",
          image: "/assets/images/product01_col02.jpg",
          price: 550,
          currency: "$",
        },
        {
          id: "col3",
          name: "Orange Metallic",
          color: "orange",
          image: "/assets/images/product01_col03.jpg",
          price: 550,
          currency: "$",
        },
      ],
      accessories: [
        {
          id: "acc1",
          name: "BMW Charging Station",
          price: 1080,
          currency: "$",
        },
        {
          id: "acc2",
          name: "BMW Maintenance Program Upgrade",
          price: 1895,
          currency: "$",
        },
        {
          id: "acc3",
          name: "1 Year BMW Maintenance Program Upgrade",
          price: 975,
          currency: "$",
        },
      ],
    },
    {
      id: "product-02",
      manufacturer: "BMW",
      model: "i8",
      price: 140700,
      currency: "$",
      defaultImage: "/assets/images/product02_col01.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed laboriosam ratione nulla atque molestias at explicabo aperiam reprehenderit culpa nihil, quis totam cupiditate dolores in quisquam magnam inventore nobis, rem adipisci eveniet illum.",
      colors: [
        {
          id: "col4",
          name: "Grey Metallic",
          color: "grey",
          image: "/assets/images/product02_col01.jpg",
          price: 0,
          currency: "$",
        },
        {
          id: "col5",
          name: "White Perl Metallic",
          color: "perl",
          image: "/assets/images/product02_col02.jpg",
          price: 1800,
          currency: "$",
        },
      ],
      accessories: [
        {
          id: "acc4",
          name: "BMW Laserlight",
          price: 6300,
          currency: "$",
        },
        {
          id: "acc5",
          name: "BMW Charging Station",
          price: 1080,
          currency: "$",
        },
        {
          id: "acc6",
          name: "BMW Maintenance Program Update",
          price: 1895,
          currency: "$",
        },
        {
          id: "acc7",
          name: "1 Year BMW Maintenance Program Upgrade",
          price: 975,
          currency: "$",
        },
      ],
    },
    {
      id: "product-03",
      manufacturer: "BMW",
      model: "840i Coupé",
      price: 120250,
      currency: "$",
      defaultImage: "/assets/images/product03_col01.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed laboriosam ratione nulla atque molestias at explicabo aperiam reprehenderit culpa nihil, quis totam cupiditate dolores in quisquam magnam inventore nobis, rem adipisci eveniet illum.",
      colors: [
        {
          id: "col6",
          name: "Alpin White Pastel",
          color: "white",
          image: "/assets/images/product03_col01.jpg",
          price: 0,
          currency: "$",
        },
        {
          id: "col7",
          name: "Sunset Orange Metallic",
          color: "orange",
          image: "/assets/images/product03_col02.jpg",
          price: 1200,
          currency: "$",
        },
        {
          id: "col8",
          name: "Carbon Black Metallic",
          color: "black",
          image: "/assets/images/product03_col03.jpg",
          price: 1200,
          currency: "$",
        },
      ],
      accessories: [
        {
          id: "acc8",
          name: "BMW Laserlight",
          price: 6300,
          currency: "$",
        },
        {
          id: "acc9",
          name: "BMW Charging Station",
          price: 1080,
          currency: "$",
        },
        {
          id: "acc10",
          name: "BMW Maintenance Program Update",
          price: 1895,
          currency: "$",
        },
      ],
    },
    {
      id: "product-04",
      manufacturer: "BMW",
      model: "i4 eDrive35",
      price: 59900,
      currency: "$",
      defaultImage: "/assets/images/product04_col01.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed laboriosam ratione nulla atque molestias at explicabo aperiam reprehenderit culpa nihil, quis totam cupiditate dolores in quisquam magnam inventore nobis, rem adipisci eveniet illum.",
      colors: [
        {
          id: "col9",
          name: "Black Pastel",
          color: "black",
          image: "/assets/images/product04_col01.jpg",
          price: 0,
          currency: "$",
        },
        {
          id: "col10",
          name: "Skyscraper Grey Metallic",
          color: "skyscraper",
          image: "/assets/images/product04_col02.jpg",
          price: 1100,
          currency: "$",
        },
      ],
      accessories: [
        {
          id: "acc11",
          name: "BMW Charging Station",
          price: 1080,
          currency: "$",
        },
        {
          id: "acc12",
          name: "BMW Maintenance Program Update",
          price: 1895,
          currency: "$",
        },
      ],
    },
  ];

  return NextResponse.json(dummyData);
}
