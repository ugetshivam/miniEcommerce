import cardStyles from "./Product.module.css"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addItem } from "../../../../redux/cartSlice";
const Product = (props) => {
    const navigate = useNavigate();
    const { updateProduct } = props.payload;
    // console.log(props);
    const dispatch = useDispatch();

    const inputQtyRef = useRef();




    const addToCart = (e) => {
        e.preventDefault();
        const item = {
            id: props.id,
            name: props.name,
            desc: props.desc,
            price: props.price,
            qty: inputQtyRef.current.value
        };
        dispatch(addItem(item));
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        updateProduct({
            uId: props.id,
            uName: props.name,
            uPrice: props.price,
            uDesc: props.desc,
            uImg: props.img
        })
        navigate('/update');
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
            </p>
            <p className="flex">
                <button className="btn" onClick={addToCart}>Add</button>
                <button className="btn" onClick={handleUpdate}>Update</button>
            </p>

        </div>
    )
}
export default Product