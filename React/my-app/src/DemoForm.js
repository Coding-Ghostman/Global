import React, {useState} from "react";

const DemoForm = () => {
    const [name, setName] = useState("");
    const handleChange = (e) =>{
        setName(e.target.value);
    }
    return(
        <div>
            <form>
                <input name="name" type="text" value={name} onChange={handleChange} />
                <p>Your name is {name}</p>
            </form>
        </div>
    )

}

export default DemoForm;