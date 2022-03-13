import "./Create.css"
import axios from 'axios'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
const Create = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");

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
        await axios.post('http://localhost:8080/products', {
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
            <input type="text" id='name' name='name' required onChange={nameChangeHandler} />
            <label htmlFor='price'>
                Price:
            </label>
            <input type="number" id='price' name='price' required onChange={priceChangeHandler} />
            <label htmlFor='desc'>
                Description:
            </label>
            <input type="text" id='desc' name='desc' required onChange={descChangeHandler} />
            <label htmlFor='img'>
                Image Link:
            </label>
            <input type="text" id='img' name='img' required onChange={imgChangeHandler} />
            <button type='submit' onClick={clickHandler} className='btn'>Submit</button>
        </form>
    )
}

export default Create