import "./Create.css"
import axios from 'axios'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
const Update = (props) => {
    const { uName, uPrice, uDesc, uImg, uId } = props.payload;
    console.log(uId);
    const [name, setName] = useState(uName);
    const [price, setPrice] = useState(uPrice);
    const [desc, setDesc] = useState(uDesc);
    const [img, setImg] = useState(uImg);

    const navigate = useNavigate();

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }
    const priceChangeHandler = (e) => {
        setPrice(e.target.value);
    }
    const descChangeHandler = (e) => {
        setDesc(e.target.value);
    }
    const imgChangeHandler = (e) => {
        setImg(e.target.value);
    }

    const clickHandler = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/products/${uId}`, {
            name: name,
            price: price,
            desc: desc,
            img: img
        })
            .then((res) => {
                console.log(res.msg);
            }).catch((err) => {
                console.log(err);
            });

        navigate("/");
        window.location.reload();
    }

    return (
        <form className="create-form flex">
            <label htmlFor='name'>
                Name:
            </label>
            <input type="text" id='name' name='name' required onChange={nameChangeHandler} value={name} />
            <label htmlFor='price'>
                Price:
            </label>
            <input type="number" id='price' name='price' required onChange={priceChangeHandler} value={price} />
            <label htmlFor='desc'>
                Description:
            </label>
            <input type="text" id='desc' name='desc' required onChange={descChangeHandler} value={desc} />
            <label htmlFor='img'>
                Image Link:
            </label>
            <input type="text" id='img' name='img' required onChange={imgChangeHandler} value={img} />
            <button type='submit' onClick={clickHandler} className='btn'>Submit</button>
        </form>
    )
}

export default Update