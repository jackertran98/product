import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { editTodo } from "../actions";
import { useEffect } from "react";

const EditHook = ({ post }) => {
  const [value, setValue] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setValue(post);
  }, [post]);

  const onChangeEdit = e => setValue({ ...value, value: e.target.value });
  const onEdited = () => {
    dispatch(editTodo(value));
  };
  return (
    <div>
      <input type="text" onChange={onChangeEdit} />
      <button onClick={onEdited}>save</button>
    </div>
  );
};

export default connect()(EditHook);
