import React, {useState} from "react";

const MileStone = () => {
    const [distance, setDistance] = useState("");
    const handleChange = (e) =>{
        setDistance((e.target.value) * 1.6);
    }
    return(
        <div>
            <form>
                <label for = "name" className="name-label">Enter Distance in Miles: </label>
                <input name="name" type="text" onChange={handleChange} />
                <p>{distance} Kilometers</p>
            </form>
        </div>
    )

}

export default MileStone;