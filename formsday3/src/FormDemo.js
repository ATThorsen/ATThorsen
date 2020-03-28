import React, {useState} from "react";
 
const NameForm = () => {
  const [name,setName] = useState("");
  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  
  function handleSubmit(event) {
      event.preventDefault();
      alert('DU har skerevet: ' + name);
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      {name}
    </div>
  );
};
 
export default function FormDemo() {
  return (
    <div style={{marginTop:20}}>
      <NameForm />
    </div>
  );
}