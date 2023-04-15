import React, {useState} from 'react'

const FormBox = (props) => {
    const { colorArray, setColorArray } = props;
    const [ color, setColor ]= useState('');
    // const [inputValue, setInputValue] = useState("#000000")
    const handleSubmit = (e) => {
        e.preventDefault();
        setColorArray([...colorArray,color]);
        setColor("");
        // setInputValue("#000000");
    };



    return (
        <div>
            <form onSubmit = {handleSubmit} className="form-control">
                <label htmlFor="Color" className="mx-1" >Type a Color</label>
                <input type="text" name="color" value={color} onChange={(e) => setColor(e.target.value)}  className="mx-1"/>
                <input type="submit" value="Add" className="btn btn-success mx-1"/>
            </form>
        </div>
    )
}
// value={inputValue}
export default FormBox