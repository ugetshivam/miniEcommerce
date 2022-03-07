import "./Create.css"
const Create = () => {
  return (
    <form className="create-form">
        <label htmlFor='name'>
            Name:
        </label>
        <input type="text" id='name' name='name'/>
        <label htmlFor='price'>
            Price:
        </label>
        <input type="number" id='price' name='price'/>
        <label htmlFor='desc'>
            Description:
        </label>
        <input type="text" id='desc' name='desc'/>
        <label htmlFor='img'>
            Image Link:
        </label>
        <input type="text" id='img' name='img'/>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Create