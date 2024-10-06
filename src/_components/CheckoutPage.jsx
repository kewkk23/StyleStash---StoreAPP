import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CoinsIcon, CreditCardIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const CheckoutPage = () => {
    const [stage, setStage] = useState(0);
    const [nameInputValue, setNameInputValue] = useState('');
    const [cityInputValue, setCityInputValue] = useState('');
    const [addressInputValue, setAddressInputValue] = useState('');
    const [zipInputValue, setZipInputValue] = useState('');
    const [cardNameInputValue, setCardNameInputValue] = useState('');
    const [cardInputValue, setCardInputValue] = useState('');
    const [expirreInputValue, setExpirreInputValue] = useState('');
    const [cvvInputValue, setCvvInputValue] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('option-one');
    const { cartItems, clearCart } = useCart();
    const route = useNavigate()
    const nameInputValueChange = (e) => setNameInputValue(e.target.value);
    const cityInputValueChange = (e) => setCityInputValue(e.target.value);
    const addressInputValueChange = (e) => setAddressInputValue(e.target.value);
    const zipInputValueChange = (e) => setZipInputValue(e.target.value);
    const cardNameInputValueChange = (e) => setCardNameInputValue(e.target.value);
    const cardInputValueChange = (e) => setCardInputValue(e.target.value)
    const exipiredInputValueChange = (e) => setExpirreInputValue(e.target.value)
    const cvvInputValueChange = (e) => setCvvInputValue(e.target.value)
    const totalPrice = cartItems.reduce((total, item) => total + item.price + 19.99, 0);

    const sendForm = (e) => {
        e.preventDefault();
        if (nameInputValue === '' || cityInputValue === '' || addressInputValue === '' || zipInputValue === '') {
            toast('Please complete the entire form');
        } else {
            checkStage();
        }
    };
    const sendPayForm = (e) => {
        e.preventDefault()
        if (cardNameInputValue === '' || cardInputValue === '' || expirreInputValue === '' || cvvInputValue === '') {
            toast('Please complete the entire form');
        } else {
            pay()
        }
    }

    const checkStage = () => {
        setStage((prevStage) => prevStage === 0 ? 1 : 0);
    };

    const handlePaymentMethodChange = (value) => {
        setPaymentMethod(value);
    };

    const handlePayment = () => {
        if (paymentMethod == 'option-one') {
            setStage(stage + 1)
        } else {
            route('/success')
        }
    };
    const pay = () => {
        route('/success')
    }

    return (
        <section className='w-full mt-5 h-auto flex justify-center items-center'>
            <div className='w-full lg:w-11/12 xl:w-[60%] h-full'>
                <div className='w-full border h-auto'>
                    <h2 className='text-center font-bold uppercase text-3xl'>Checkout</h2>
                    <div className='flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-1/2 p-4 border-r'>
                            <h2 className='text-2xl font-bold'>Cart Items</h2>
                            {cartItems.length === 0 ? (
                                <p>Your cart is empty</p>
                            ) : (
                                <ul>
                                    {cartItems.map((item, index) => (
                                        <li key={index} className='flex justify-between items-center p-2 border-b'>
                                            <div>
                                                <p className='font-bold'>{item.name}</p>
                                                <p className='text-sm text-gray-500'>Size: {item.selectedSize}</p>
                                                <p className='text-lg font-bold'>Price: {item.price.toFixed(2)} zł</p>
                                                <p className='text-lg font-bold'>Shipping: 19.99zł</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <div className='mt-4'>
                                <p className='text-lg font-bold'>Total: {totalPrice.toFixed(2)} zł</p>
                                <Button className='bg-red-600 hover:bg-red-400 w-full' onClick={clearCart}>Clear Cart</Button>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2 p-4'>
                            <div className={`${stage === 0 ? 'block' : 'hidden'}`}>
                                <h2 className='text-2xl font-bold'>Your address</h2>
                                <form>
                                    <div className='flex flex-col mb-4'>
                                        <label htmlFor='name' className='mb-2'>Full name</label>
                                        <input onChange={nameInputValueChange} type='text' value={nameInputValue} id='name' className='border p-2' required />
                                    </div>
                                    <div className='flex flex-col mb-4'>
                                        <label htmlFor='City' className='mb-2'>City</label>
                                        <input value={cityInputValue} onChange={cityInputValueChange} type='text' id='City' className='border p-2' required />
                                    </div>
                                    <div className='flex flex-col mb-4'>
                                        <label htmlFor='Address' className='mb-2'>Address</label>
                                        <input type='text' id='Address' value={addressInputValue} onChange={addressInputValueChange} placeholder='Street 32' className='border p-2' required />
                                    </div>
                                    <div className='flex flex-col mb-4'>
                                        <label htmlFor='zip-code' className='mb-2'>Zip-code</label>
                                        <input type='text' id='zip-code' value={zipInputValue} onChange={zipInputValueChange} placeholder='32-222' className='border p-2' required />
                                    </div>
                                    <Button onClick={sendForm} type='submit' className='bg-green-600 w-full hover:bg-green-400'>Next</Button>
                                </form>
                            </div>
                            <div className={`${stage === 1 ? 'block' : 'hidden'}`}>
                                <h2 className='text-2xl font-bold'>Select payment method</h2>
                                <div className='mt-3 mb-4'>
                                    <RadioGroup value={paymentMethod} onValueChange={handlePaymentMethodChange}>
                                        <div className="flex items-center space-x-2 border p-3">
                                            <RadioGroupItem value="option-one" id="option-one" />
                                            <Label className='flex items-center gap-3' htmlFor="option-one">Card <CreditCardIcon /></Label>
                                        </div>
                                        <div className="flex items-center space-x-2 border p-3">
                                            <RadioGroupItem value="option-two" id="option-two" />
                                            <Label className='flex items-center gap-3' htmlFor="option-two">Cash <CoinsIcon /></Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <Button className='w-1/3' onClick={checkStage}>Back</Button>
                                    <Button className='w-1/3 bg-green-600 hover:bg-green-400' onClick={handlePayment}>Pay</Button>
                                </div>
                            </div>
                            <div className={`${stage === 2 ? 'block' : 'hidden'}`}>
                                <h2 className='text-2xl font-bold'>Your credit card</h2>
                                <p className='text-red-600 font-bold'>PLEASE DON'T USE REAL CREDIT CARD</p>
                                <form >
                                    <div className='flex flex-col mb-4'>
                                        <label htmlFor='name' className='mb-2'>Name</label>
                                        <input value={cardNameInputValue} onChange={cardNameInputValueChange} type='text' id='name' className='border p-2' required />
                                    </div>
                                    <div className='flex flex-col mb-4'>
                                        <label htmlFor='cardNumber' className='mb-2'>Card Number</label>
                                        <input value={cardInputValue} onChange={cardInputValueChange} type='text' id='cardNumber' className='border p-2' required />
                                    </div>
                                    <div className='flex flex-col mb-4'>
                                        <label htmlFor='expiry' className='mb-2'>Expiry Date</label>
                                        <input type='text' value={expirreInputValue} onChange={exipiredInputValueChange} id='expiry' placeholder='MM/YY' className='border p-2' required />
                                    </div>
                                    <div className='flex flex-col mb-4'>
                                        <label htmlFor='cvv' className='mb-2'>CVV</label>
                                        <input type='text' value={cvvInputValue} onChange={cvvInputValueChange} id='cvv' className='border p-2' required />
                                    </div>
                                    <div className='flex justify-between'>
                                        <Button onClick={() => { setStage(stage - 1) }}>Back</Button>
                                        <Button type='submit' onClick={sendPayForm} className='bg-green-600 hover:bg-green-400'>Pay Now</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutPage;
