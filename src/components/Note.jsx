import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveAsIcon from "@mui/icons-material/SaveAs";

const Note = ({
id,
title: initialTitle,
content: initialContent,
onDelete,
}) => {
const [title, setTitle] = useState(initialTitle);
const [content, setContent] = useState(initialContent);
const [isEditing, setIsEditing] = useState(false);

const handleEdit = () => {
setIsEditing(true);
};

const handleSave = () => {
// You can add logic here to save the edited content, if needed
setIsEditing(false);
};

return (
<div className={`note ${isEditing ? "editing" : ""}`}>
    {isEditing ? (
    <>
        <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleSave}>
        <SaveAsIcon />
        </button>
    </>
    ) : (
    <>
        <h1>{title}</h1>
        <p>{content}</p>
        <button className="edit-button" onClick={handleEdit}>
        <EditIcon />
        </button>
        <button onClick={onDelete}>
        <DeleteIcon />
        </button>
    </>
    )}
</div>
);
};

export default Note;
