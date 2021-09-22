/* eslint-disable no-console */
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { WilderProps } from './Wilder';

const AddWilder = ():JSX.Element => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data:WilderProps) => {
    try {
      const result = await axios.post(
        'http://localhost:5000/api/wilders',
        data
      );
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor='idName'>First Name</label>
    <input id='idName'{...register('firstName')} />
    <label htmlFor='idGender'>Gender Selection</label>
    <select {...register('gender')}>
      <option value="female">female</option>
      <option value="male">male</option>
      <option value="other">other</option>
    </select>
    <input type="submit" />
  </form>
  );
};

export default AddWilder;
