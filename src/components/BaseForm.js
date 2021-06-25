import React, { useState } from "react";

function Form() {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <form>
        <div>
          <p>Do you live in the US?</p>
          <label className="switch">
          <input type="checkbox" id="us" name="us" checked={isChecked} onChange={handleOnChange} />
          <div className="slider round"></div>
        </label>
      </div>
      <div>
        <label>What is your street address?</label>
        <br></br>
        <input type="text" id="address" name="address" disabled={!isChecked} />
      </div>
      <div>
        <p>What is 2+2?</p>
        <input type="radio" id="1" name="sum" value="1" />
        <label for="1">1</label>
        <br></br>
        <input type="radio" id="2" name="sum" value="2" />
        <label for="2">2</label>
        <br></br>
        <input type="radio" id="3" name="sum" value="3" />
        <label for="3">3</label>
        <br></br>
        <input type="radio" id="4" name="sum" value="4" />
        <label for="4">4</label>
        <br></br>
        <input type="radio" id="5" name="sum" value="5" />
        <label for="5">5</label>
      </div>
      <div>
        <label for="life">What is the meaning of life?</label>
        <br></br>
        <input type="text" id="life" name="life"/>
      </div>
      <div>
        <p>Which are your favorite ice cream flavors?</p>
        <input type="checkbox" id="chocolate" name="flavor" value="chocolate" />
        <label for="chocolate">Chocolate</label>
        <br></br>
        <input type="checkbox" id="vanilla" name="flavor" value="vanilla" />
        <label for="vanilla">Vanilla</label>
        <br></br>
        <input type="checkbox" id="strawberry" name="flavor" value="strawberry" />
        <label for="strawberry">Strawberry</label>
        <br></br>
      </div>
      <input type="submit" value="Submit"></input>
    </form>
  );
}

export default Form;
