import { useState } from "react";

export default function useForm() {
  const [formValues, setFormValues] = useState({});

  const handleChange = (event) => {
    event.persist();

    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  return {
    handleChange,
    formValues,
  };
}
