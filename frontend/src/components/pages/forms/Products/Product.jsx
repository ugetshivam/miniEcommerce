import cardStyles from "./Product.module.css"
import CartContext from "../../../contexts/CartContext";
import { useRef, useContext } from "react";
const Product = (props) => {
    const cartCtx = useContext(CartContext);

    const inputQtyRef = useRef();


    const addToCart = () => {

        cartCtx.addItemHandler({
            id: props.id,
            name: props.name,
            desc: props.desc,
            price: props.price,
            qty: inputQtyRef.current.value
        })

    }
    return (
        <div className={`${cardStyles.card} flex`}>
            <p><img src={props.img} alt="" /></p>
            <p className={cardStyles.title}>
                <span>{props.name}</span>
            </p>
            <p className={cardStyles.details}>
                <span>{props.desc}</span>
            </p>
            <p className={`${cardStyles.details} flex`}>
                <span><b>${props.price}</b></span>
                <label>Amount</label>
                <input
                    type="number"
                    min="1"
                    defaultValue={1}
                    ref={inputQtyRef}
                />
                <button className="btn" onClick={addToCart}>Add</button>
                <button className="btn" >Update</button>
            </p>

        </div>
    )
}
export default Product