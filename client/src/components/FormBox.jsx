import React, {useState} from 'react'

const FormBox = (props) => {
    const { colorArray, setColorArray } = props;
    const [ color, setColor ]= useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setColorArray([...colorArray,color]);
    };



    return (
        <div>
            <form onSubmit = {handleSubmit} className="form-control">
                <label htmlFor="Color" className="mx-1" >Type a Color</label>
                <input type="text" name="color" onChange={(e) => setColor(e.target.value)} className="mx-1"/>
                <input type="submit" value="Add" className="btn btn-success mx-1"/>
            </form>
        </div>
    )
}

export default FormBox