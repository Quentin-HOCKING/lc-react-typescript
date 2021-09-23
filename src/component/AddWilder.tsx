/* eslint-disable no-console */
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { WilderProps } from './Wilder';

const AddWilder = (): JSX.Element => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: WilderProps) => {
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
    <label htmlFor='idName'>Wilder&apos;s Name</label>
    <input id='idName'{...register('name')} />
    <label htmlFor='idCity'>Wilder&apos;s City</label>
    <input id='idCity'{...register('city')} />
    <label htmlFor='idCity'>Wilder&apos;s Skill</label>
    <input id='idSkill'{...register('skills.title')} />
    <label htmlFor='idVote'>Wilder&apos;s votes</label>
    <input id='idSkill'{...register('skills.votes', {min: 0})} type="number" />
  
    <input type="submit" />
  </form>

/* <form onSubmit={handleSubmit(onSubmit)}>
<input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
<input type="text" placeholder="Wilder's City" {...register("Wilder's City", {required: true, maxLength: 100})} />
<input type="text" placeholder="Wilder's First Skill" {...register("Wilder's First Skill", {required: true})} />
<input type="number" placeholder="Wilder's first skill votes" {...register("Wilder's first skill votes", {required: true, min: 0})} />
<input type="text" placeholder="Wilder's Second Skill" {...register("Wilder's Second Skill", {})} />
<input type="number" placeholder="Wilder's Second skill votes" {...register("Wilder's Second skill votes", {, min: 0})} />

<input type="submit" />
</form> */
  );
};

export default AddWilder;
