import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  msg: string;
}

export const ContactForm = () => {
  // Initialize the form state
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    msg: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  <button type="submit" onClick={(e) => handleSubmit(e)}>
    Submit
  </button>;
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h2>Contact Form</h2>
      Name:
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={(e) => handleChange(e)}
      />{" "}
      <br />
      Email:
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />{" "}
      <br />
      Msg:
      <input
        type="text"
        name="msg"
        value={formData.msg}
        onChange={handleChange}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Submit
      </button>
    </div>
  );
};
