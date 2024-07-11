import React from "react";
import { useState } from "react";

const TextBox = () => {

    const [bgColor, setbgColor] = useState('slateblue');

    return (
        <div>
            <article title="Parrafo principal" 
            style={
                {backgroundColor: 'slateblue'}
            }
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eius aspernatur aliquid vero modi. Aliquam quisquam deserunt quidem ratione ex facilis. Et est hic, deserunt eligendi adipisci asperiores quisquam placeat.</article>
            <button
                onClick={() => setbgColor (bgColor === 'slateblue' ? ' indigo ' : 'slateblue') }
            >Pulsa para cambiar</button>
        </div>
    );
};
export default TextBox