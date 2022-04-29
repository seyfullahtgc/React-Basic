import React, { useEffect, useState } from "react";

function UygulamaGet() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    //default olarak get methodu çalışır.
    fetch("northwind.now.sh/api/categories")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div>
        <ul>
          {products.map((repo, index) => (
            <li key={index}>{repo.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default UygulamaGet;
