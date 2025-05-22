import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import './CheckOut.css';
import { FiMapPin } from 'react-icons/fi';
import { toast } from 'react-toastify';

const Checkout = () => {
     const [products, setProducts] = useState([]);
      const subTotal = products.reduce(
    (sum, item) => sum + (item.price * (item.quantity || 1)),
    0
    );
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setProducts(Array.isArray(storedCart) ? storedCart : []);
    }, []);
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        payment: ''
   });
    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);
    const [touched , setTouched] = useState({})
    const nameRef = useRef(null);

    useEffect(() => {
        nameRef.current?.focus();
    }, []);
    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
        }
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.payment) newErrors.payment = 'Payment option is required';

        return newErrors;
   };
  const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if(errors[name]){
            setErrors(prevErrors =>{
                const newErrors = {...prevErrors}
                delete newErrors[name]
                return newErrors;
            })
        }
        
    };
    const handleBlur = (e)=>{
        const {name} = e.target;
        setTouched(prev =>({...prev,[name]:true}))
        const fieldErrors = validate();
        if(fieldErrors[name]){
            setErrors(prevErrors =>(
                {...prevErrors, [name]: fieldErrors[name]}

            ))
        }
        else {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
        }
         setErrors({});
    setSubmittedData(formData);
            localStorage.removeItem('cart');

    setTimeout(() => {
        toast.success('Thank you for your purchase!')
    }, 2000);
      setTimeout(() => {
      window.location.href = '/Webpage/products';
    }, 4000);

    setFormData({
      name: '',
      email: '',
      address: '',
      payment: ''
    });
   }
 const handleUseCurrentLocation = async () => {
  if (!navigator.geolocation) {
    alert('Geolocation is not supported by your browser');
    return;
  }

  navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords;
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
      const data = await response.json();
      const location = data.display_name || `Lat: ${latitude}, Lon: ${longitude}`;
      setFormData(prev => ({ ...prev, address: location }));
      setTouched(prev => ({ ...prev, address: true }));
      errors.email = ''
    } catch (error) {
      alert('Failed to fetch address');
      console.error(error);
    }
  }, () => {
    alert('Unable to retrieve your location');
  });
};


    return(
        <div className="d-flex justify-content-center cart-page-wrapper">
       <Container className="d-flex align-items-start shopping-cart">
      <Card style={{flex:1, width: '100%', maxWidth: '700px'}}>
         <div className="justify-content-start align-items-start pt-3" style={{paddingLeft:'10px'}}>
            <h5>Billing Details</h5>
            <hr style={{marginRight:'10px'}}/>
            <Form onSubmit={handleSubmit} noValidate className='custom-Form'>
               <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                  className='control-field'
                    ref={nameRef}
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                     onBlur={handleBlur}
                    isInvalid={touched.name && !!errors.name}
                    placeholder='Enter Your name..'
                  />
                  <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
               </Form.Group>
               <Form.Group controlId='formEmail' className='mb-3 pt-2'>
                 <Form.Label>Email</Form.Label>
                 <Form.Control 
                 className='control-field'
                   type='email'
                   name='email'
                   value={formData.email}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   isInvalid={!!errors.email}
                   placeholder='Enter your email...'
                 />
                 <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
               </Form.Group>
               <Form.Group>
                 <Form.Label>Address
                 </Form.Label>
                 <Form.Control
                 className='control-field'
                  as="textarea"
                  rows={3}
                  name='address'
                  value={formData.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={!!errors.address}
                  placeholder='Enter your address...'
                 />
                 <span onClick={handleUseCurrentLocation}
                    className="ms-2 text-primary d-inline-flex align-items-center pt-1"
                    role="button">
                        <FiMapPin size={18} className="me-1" />
                        Select your current location</span>
                 <Form.Control.Feedback type='invalid'>{errors.address}</Form.Control.Feedback>
               </Form.Group>
               <Form.Group controlId="formPayment" className="mb-3 pt-2">
                 <Form.Label>Payment Option</Form.Label>
                 <Form.Select
                 className='control-field'
                   name='payment'
                   value={formData.payment}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   isInvalid={!!errors.payment}
                 >
                 <option value="">Select</option>
                 <option value="Credit Card">Credit Card</option>
                 <option value="Online Payment">Online Payment</option>
                 <option value="Cash On Delivery">Cash On Delivery</option>
                 </Form.Select>
                 <Form.Control.Feedback type='invalid'>{errors.payment}</Form.Control.Feedback>
               </Form.Group>
               <Button type="submit" className="custom-btn" style={{marginBottom:'5%'}}>Proceed To Pay </Button>
            </Form>
            {submittedData && (
        <div className="mt-4 border-top pt-3">
          <h4>Order Summary</h4>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>Payment:</strong> {submittedData.payment}</p>
        </div>
      )}
        </div>
      </Card>
     
         <Card className="summary-card sticky-card" style={{ width: '300px', height: 'fit-content' }}>
                <div className="justify-content-start align-items-start pt-3">
                <h5>Order Summary</h5>
                <hr style={{marginRight:'10px'}}/>
                   {products.length === 0 ? (
                          <p><b>Your shopping cart is empty.</b></p>
                        ) : (
                          products.map((product, indexValue) => (
                            <div className=" position-relative mb-3" key={indexValue}>
                                <div className=" d-flex justify-content-between align-items-center mb-3">
                                <div className="ms-2">
                                    <p className="mb-1">{product.title}</p>
                                </div>
                                <div>
                                    <p className="mb-1" style={{paddingRight:'7px'}}>${product.price.toFixed(2)}</p>
                                </div>
                                </div>
                            </div>
                          )
                        ))}
                      
                         {products.length ===0 ?(
                                        <p></p>
                                    ):(
                                    <><hr style={{marginRight:'10px'}}/>
                                      <div className=" position-relative mb-3">
                                <div className=" d-flex justify-content-between align-items-center mb-3">
                                <div className="ms-2">
                                    <p className="mb-1 fw-bold">Total</p>
                                </div>
                                <div>
                                        <p className="mb-1 fw-bold" style={{paddingRight:'7px'}}>${subTotal.toFixed(2)}</p>
                                </div>
                                </div>
                            </div>
                                    </>   
                                    )}
                        
                </div>
      </Card>
     
       </Container>
     
    </div>
    )
}
export default Checkout;
