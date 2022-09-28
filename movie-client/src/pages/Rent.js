import "../styles/rent.css";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Rent() {
  const [rday, setRday] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [movie, setMovie] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [disTotalPrice, setDisTotalprice] = useState(0);

  const params = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await axios.get(`http://localhost:8080/movies/${params._id}`);
      setMovie(res.data);
    };
    fetchMovie();
  });

  console.log(movie, "from rentals...");
  console.log(movie.price, "from rental priceee");

  const onChangeHandler = (event) => {
    event.preventDefault();
    setRday((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    
  };

  const onClickCalculateHandler = (event) => {
    const rentDay = Number(rday.day);
    // let result = Number(setTotalPrice(rentDay * movie.price));
    setTotalPrice(rentDay * movie.price);
    event.preventDefault();
    setIsCalculated(true);
    if (rentDay >= 3 && rentDay <= 5) {
      // setTotalPrice(rentDay * movie.price);
     setDisTotalprice(totalPrice -  (rentDay * 0.1 * movie.price));
      
    } else if (rentDay >= 6 && rentDay <= 10) {
      // setTotalPrice(rentDay * movie.price);
     setDisTotalprice(totalPrice - (rentDay * 0.2 * movie.price));
     
    } else if (rentDay >= 11 && rentDay <= 20) {
      // setTotalPrice(rentDay * movie.price);
     setDisTotalprice(totalPrice - (rentDay * 0.25 * movie.price));
     
    } else if (rentDay < 20) {
      // setTotalPrice(rentDay * movie.price);
     setDisTotalprice(totalPrice - (rentDay * 0.3 * movie.price));
     
    }
    
  };
  const checkoutOnClickHandler =(event)=>{
    event.preventDefault();
    alert("Thank you! Enjoy Your Movie");
  }
  console.log(rday, "days entered....");
  console.log(totalPrice, "totalpride");
  console.log(disTotalPrice, "dis total......");

 
  return (
    <div>
      <Navbar />
      <div className="rentContainer">
        <div className="rentWrapper">
          <div className="rentbtn">
            
            <div className="rentCheckOut">
            <h1 className="rentTitle"> Checkout</h1>
              { !isCalculated ? (
                <>
                  <div className="rentDays">
                    <label>Rental Days:</label>
                    <input
                      type="number"
                      name="day"
                      onChange={onChangeHandler}
                      placeholder="Please enter minimum rental day 2..."
                    />
                  </div>
                  <div className="totalPrice">
                    <button onClick={onClickCalculateHandler}>Calculate</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="rentDis">
                    <label><b>Total Price before discount: $</b></label>
                    <label>{totalPrice}</label>
                  </div>
                  <div className="rentDis">
                    <label><b>Your discount: $</b></label>
                    <label>{disTotalPrice}</label>
                  </div>
                  <div className="rentDis">
                    <label><b>Your discount total price: $</b></label>
                    <label>${totalPrice + disTotalPrice}</label>
                  </div>
                  <div className="totalPrice">
                    <button onClick={checkoutOnClickHandler}>Checkout</button>
                  </div>
                </>
              )}
            </div>
            <div className="rentDiscount">
              <h3>Discount Options</h3>
              <ul>
                <li>
                  If the total rental day is between 3 to 5, 10% discount!
                </li>
                <li>
                  If the total rental day is between 6 to 10, 20% discount!
                </li>
                <li>
                  If the total rental day is between 11 to 20, 30% discount!
                </li>
                <li>If the total rental day is more than 20, 35% discount!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rent;
