import React from "react";

const index = () => {
  return (
    <section id="food-menu" className="bag">
      <h2 className="food-menu-heading">ORDER</h2>
      <div className="food-menu-container container">
        <div className="food-menu-item">
          <div className="food-img">
            <img
              src="https://www.tahutuna.id/wp-content/uploads/2022/07/Abon-Ikan-Tuna-Pedas-1277x650.jpg"
              alt="error"
            />
          </div>
          <div className="food-description">
            <h2 className="food-titile">Abon Tuna</h2>
            <p>Level : EASY, MEDIUM, MAX</p>
            <p className="food-price">RP 10.000</p>
          </div>
        </div>
        <div className="food-menu-item">
          <div className="food-img">
            <img
              src="https://lzd-img-global.slatic.net/g/p/d240477dd96d9fa19dedbf4f8dc33390.jpg_720x720q80.jpg_.webp"
              alt="error"
            />
          </div>
          <div className="food-description">
            <h2 className="food-titile">Abon Cakalang</h2>
            <p>Level : EASY, MEDIUM, MAX</p>
            <p className="food-price">Rp 10.000</p>
          </div>
        </div>
      </div>
      <div className="food-menu-item">
        <div className="container-k">
          <table className="rwd-table">
            <tbody>
              <tr>
                <th>ABON</th>
                <th>HARGA</th>
                <th>PEDAS</th>
                <th>UKURAN</th>
                <th>JUMLAH</th>
                <th>ALAMAT</th>
              </tr>
              <tr>
                <td data-th="title">Tuna</td>
                <td data-th="price">Rp 10.000</td>
                <td>
                  <select>
                    <option />
                    <option>EASY</option>
                    <option>MEDIUM</option>
                    <option>MAX</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option />
                    <option>65kg</option>
                    <option>35kg</option>
                  </select>
                </td>
                <td data-th="quantity">
                  <input
                    type="number"
                    id="qty1"
                    defaultValue={0}
                    placeholder="Enter Quantity"
                  />
                </td>
                <td>
                  <form>
                    <label htmlFor="Masukan Alamat " />
                    <input
                      id="alamat"
                      name="alamat"
                      placeholder="Masukan alamat tujuan..."
                    />
                  </form>
                </td>
              </tr>
              <tr>
                <td data-th="title">Cakalang</td>
                <td data-th="price">Rp 13.000</td>
                <td>
                  <select>
                    <option />
                    <option>EASY</option>
                    <option>MEDIUM</option>
                    <option>MAX</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option />
                    <option>75kg</option>
                    <option>35kg</option>
                  </select>
                </td>
                <td data-th="quantity">
                  <input
                    type="number"
                    id="qty2"
                    defaultValue={0}
                    placeholder="Enter Quantity"
                  />
                </td>
                <td>
                  <h5>METODE PEMBAYARAN :</h5>
                  <select>
                    <option />
                    <option>BAYAR DI TEMPAT</option>
                    <option>TRANSFER BANK</option>
                    <option>OYO</option>
                    <option>ALFAMART</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            onclick="total()"
            className="button-1"
            style={{ paddingLeft: 48, marginLeft: 200 }}
          >
            Total Cost
          </button>
          <button
            onclick="submit()"
            className="button-1"
            style={{ marginLeft: 20 }}
          >
            Submit Order
          </button>
          <div className="result" id="total_cost" style={{ marginLeft: 250 }}>
            Rp 0.00
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
