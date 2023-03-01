import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://635fa1ae3e8f65f283b79aef.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Error fetching pizza!");
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Loading...</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₴</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
