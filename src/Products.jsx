
import { useState } from "react";
import Card from "./Card";
import productsData from "./data/product.json";

function Products({ searchquery }) {
  const [products] = useState(productsData);

  const filteredproducts = products.filter((p) => {
    return p.title
      .toLowerCase()
      .includes((searchquery || "").toLowerCase());
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredproducts.map((e) => (
          <Card
            key={e.id}
            image={e.image}
            title={e.title}
            price={e.price}
          />
        ))}
      </div>
    </>
  );
}

export default Products;
