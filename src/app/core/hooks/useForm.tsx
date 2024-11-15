import { ChangeEvent, Dispatch, FormEvent, useState } from "react";

export const useForm = (initialState = {}, setError: Dispatch<React.SetStateAction<string>>) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const checkSubmit = (e: FormEvent<Element>) => {
    e.preventDefault();
  };

  return {
    ...form,
    handleChange,
    checkSubmit,
  };
};