import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Card
        img="https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dHNoaXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        title="HIGHLANDER"
        detail="Men Slim Fit Tshirt"
        price="Rs.1400"
        prevprice="Rs.2500"
        discdet="(30% off)"
      />

      <Card
        img="https://images.unsplash.com/photo-1593726856932-b5b9a661ed46?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzd8fHRzaGlydHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        title="Roadstar"
        detail="Men Slim Fit Tshirt"
        price="Rs.800"
        prevprice="Rs.1200"
        discdet="(40% off)"
      />

      <Card
        img="https://images.unsplash.com/photo-1527534156596-5ba1e6d5f017?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTIzfHx0c2hpcnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        title="Denim"
        detail="Men Slim Fit Tshirt"
        price="Rs.1100"
        prevprice="Rs.1400"
        discdet="(35% off)"
      />

      <Card
        img="https://images.unsplash.com/photo-1594895418704-a96a9609aba4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjQxfHx0c2hpcnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        title="WROGN"
        detail="Men Slim Fit Tshirt"
        price="Rs.1800"
        prevprice="Rs.2600"
        discdet="(50% off)"
      />
    </div>
  );
}

function Card({ img, title, detail, price, prevprice, discdet }) {
  return (
    <div
      className="Card"
      style={{ width: "220px", height: "400px", margin: "10px" }}
    >
      <div style={{ width: "220px", height: "300px" }}>
        <img src={img} style={{ width: "100%", height: "100%" }} alt="1"></img>
      </div>
      <div style={{ marginLeft: "8px" }}>
        <div style={{ marginTop: "10px", fontWeight: "600", fontSize: "18px" }}>
          {title}
        </div>
        <div style={{ marginTop: "5px", fontWeight: "300" }}>{detail}</div>
        <div style={{ marginTop: "5px", fontWeight: "600", fontSize: "15px" }}>
          {price}
          <span style={{ marginLeft: "10px", fontWeight: "100" }}>
            <s style={{ color: "gray" }}>{prevprice}</s>
          </span>
          <span
            style={{ marginLeft: "6px", fontWeight: "100", color: "orange" }}
          >
            {discdet}
          </span>
        </div>
      </div>
    </div>
  );
}
