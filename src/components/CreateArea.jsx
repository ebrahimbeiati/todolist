import React, { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";




const CreateArea = (props) => {
const[isExpanded, setIsExpanded]=useState(false);

const [note, setNote] = useState({
title: "",
content: "",
});

function submitNote(e) {
e.preventDefault();
props.onAdd(note); // Assuming you want to call the onAdd function passed as a prop

setNote({
    title: "",
    content: "",
});
}

function handleChange(e) {
const { name, value } = e.target;
setNote((prevNote) => ({
    ...prevNote,
    [name]: value,
}));
}

function Expand(){
setIsExpanded(true);
}

return (
<div>
    <form className="create-note">
    {isExpanded &&(
        <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={note.title}
    />
    )}

    
    <textarea
        name="content"
        placeholder="Take a note..."
        rows={isExpanded ? 3 : 1}
        onClick={Expand}


        onChange={handleChange}
        value={note.content}
    />
    <Fab onClick={submitNote}>
        <AddIcon />
    </Fab>
    </form>
</div>
);
};

export default CreateArea;
