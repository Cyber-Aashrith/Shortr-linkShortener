import React from 'react'
import "./App.css";
import Button from 'react-bootstrap/Button';

const LinkShortener = ({ setInputValue }) => {

  const [value, setValue] = React.useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }
  return (
    <div className='LinkShortener'>
     
     <div>
        <form method='POST' action='/'>
         <input className='input' type="text" name='link' placeholder='Enter Link Here' value={value} onChange={(e) => setValue(e.target.value)}/>
         <Button className='inputBtn' onClick={handleClick}>Shorten</Button>
        </form>
     </div>
    </div>
  )
}

export default LinkShortener