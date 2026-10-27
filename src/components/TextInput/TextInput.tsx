import type { TextInputProps } from "../../types";

import { useState } from 'react'; // Import useState from React
 
export function TextInput( {
    onTextChange,
    placeholder ="Type here...",
    initialValue = "",
}: TextInputProps) {
  // Call useState inside the component function
  const [textInput, setText] = useState(initialValue);
  
  
  //event object
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newtextInput = event.target.value;
    setText(newtextInput);
    //tell parent
    onTextChange(newtextInput);
    console.log("Input value:", event.target.value);
  };
 
  return (
    // a text area would be more suitable for this activity
    <div>
        <textarea  value={textInput} onChange={handleChange} placeholder={placeholder}/>

    </div>
  );
}