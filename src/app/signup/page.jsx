'use client';

import React, { useState } from 'react';
import Link from 'next/link'; 
import NavbarComponent from '../../components/Navbar/NavbarComponent';

// Define these properly or import them if they exist
const createUser = async (formData) => {
  // Simulate API call
  return { message: "User created!" };
};

const initialState = {
  message: "",
};

// Component function should start with a capital letter
const SignupPage = () => {
  const [state, setState] = useState(initialState);
  const [pending, setPending] = useState(false);

  const formAction = async (event) => {
    event.preventDefault();
    setPending(true);

    const formData = new FormData(event.target);
    const response = await createUser(formData);

    setState(response);
    setPending(false);
  };

  return (
    <>
      <NavbarComponent />
      <div>
        <form onSubmit={formAction}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required />

          <p aria-live="polite">{state.message}</p>
          <button disabled={pending}>
            {pending ? "Signing up..." : "Sign up"}
          </button>
        </form>
      </div>
    </>
  );
};

export default SignupPage;