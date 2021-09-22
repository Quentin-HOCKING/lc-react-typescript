import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

const AddWilder = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = async data => {
    try {
      const result =  await axios.post(
        "http://localhost:5000/api/wilders",
        data
      );
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }    
};

export default AddWilder;
