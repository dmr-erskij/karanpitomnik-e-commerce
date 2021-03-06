import React from "react";
import SEO from "../components/Helmet";
import { useSelector } from "react-redux";
import Select from "../components/Select";

const PriceList = () => {
  const {
    priceList: { products: priceList },
  } = useSelector((store) => store.product);
  return (
    <>
      <SEO
        title="Каталог"
        desc="каталог декоративных растений питомника 'Карань'"
      />
      <main className="main">
        <div className="container">
          <section className="price-page">
            <div className="price-page__title">
              <h1>Прайс-лист</h1>
              <h2>питомника "карань"</h2>
            </div>
            <Select parentClass="price-page" />
            <table className="price-page__price price-list">
              <thead>
                <tr>
                  <th>Наименование</th>
                  <th>Контейнер</th>
                  <th>
                    Цена <span>{`(руб.)`}</span>{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceList.map((item) => {
                  const { title, subtitle, price } = item;
                  return (
                    <tr key={item.id}>
                      <td>
                        {title}
                        <span>{subtitle}</span>
                      </td>
                      <td>C-1</td>
                      <td>{price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </>
  );
};

export default PriceList;
