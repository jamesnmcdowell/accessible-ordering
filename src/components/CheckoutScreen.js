
import React, { Component } from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { media, Container } from './Media';
import { SingleDatePicker } from 'react-dates';
import DropdownButton from './DropdownButton';
import CheckoutBlock from './CheckoutBlock';
import Cart from './Cart';
import {
    withRouter
} from 'react-router-dom';

class CheckoutScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayGuestLogin: false,
            position: 1,
            firstName:"",
            email: "",
            phone: "",
            pickupTime: null
        }
    }
    componentDidUpdate(prevProps) {
    }

    progressState() {
 
        this.setState({position: this.state.position + 1 })
    } 
    handleTextChange (field) {
        return (e)=>{this.setState({
            [field]:e.target.value
        })}
    }

    submitState1 () {
        if (this.state.firstName && this.state.email && this.state.phone) {
            this.progressState();   
        }
    }
    submitState2 () {
        if (this.state.pickupTime) {
            this.progressState();   
        }
    }
    submitState3 () {
            this.progressState();   
    }
    submitOrder () {
        this.props.updateOrder({ 
            firstName: this.state.firstName,
            email: this.state.email,
            phone: this.state.phone,
            pickupTime: this.state.pickupTime,
            resturant: this.props.resturant
        })
        this.props.history.push('/success');   
    }


    render() {
        var coeff = 1000 * 60 * 15;
        var date = new Date();  //or use any other date
        var rounded = new Date(Math.round(date.getTime() / coeff) * coeff)
        var time = rounded.toLocaleTimeString('it-IT')
        let time2 = time
        console.log(time);
        let { cart, total, costMap, history} = this.props;
        let { position, displayGuestLogin, firstName, email, phone, pickupTime} = this.state;
        console.log(costMap);
        console.log(position);
        return (
            <Container vert>
            <Wrapper>
            <AccountBlock>
                { (position > 1) ?
                <div>
                <Title> New Around Here? </Title>
                <p> hello {firstName} </p>
                </div>
                    :
                    <div>
                    <Title> New Around Here? </Title>
                    <GridSeparate>
                        <Button aria-label="" 
                                    role="button" 
                                    tabIndex="0" 
                                    alt=""
                                    disabled 
                                    > 
                        Create Account
                        </Button>
                        <Button aria-label=""
                            role="button"
                            tabIndex="0"
                            alt=""
                            disabled
                        >
                            Sign In
                        </Button>
                        <Button aria-label=""
                                    role="button"
                                    tabIndex="0"
                                    alt=""
                                    onClick={()=> {this.setState({displayGuestLogin: true})}}
                                    >
                            Guest Checkout
                        </Button>
                    </GridSeparate>
                    { displayGuestLogin&&
                    
                    <div>
                        <BR/>
                        <Form>
                            <label htmlFor="firstname">Name:</label>
                            <input type="text" name="firstname" id="firstname" onChange={this.handleTextChange('firstName')}/>
                            <br />
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email" id="email" onChange={this.handleTextChange('email')}/>
                            <br />
                            <label htmlFor="phone">Phone:</label>
                            <input type="text" name="phone" id="phone" onChange={this.handleTextChange('phone')} />
                        </Form>
                                <br />
                    {(position === 1)&&
                        <Button aria-label=""
                            role="button"
                            tabIndex="0"
                            alt=""
                            onClick={this.submitState1.bind(this)}
                        >
                            Submit
                        </Button>
                    }
                    </div>
                    }
                    </div>
                }
            </AccountBlock> 
            <AccountBlock> 
                <Title> Pickup Time </Title>
                
                {( position >= 2 ) &&
                <div class="select-box">
                {/* <SingleDatePicker
                    date={this.state.date} // momentPropTypes.momentObj or null
                    onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                    id="your_unique_id" // PropTypes.string.isRequired,
                /> */}
                <DropDownButtonStyled onSelect={(val)=> {this.setState({pickupTime: val})} } settings={{ 'title': 'Select Time' }} options={['11:00am', '11:15am', '11:30am', '11:45am', '12:00pm', '12:15pm', '12:30pm', '12:45pm', '1:00pm']} />
                { pickupTime&&
                <p>{pickupTime} </p> 
                }
                {/* <label htmlFor="appt">Select pickup time:</label>
                    <input type="time"  step="900" id="appt" name="appt"
                    min="9:00" max="18:00" required/>
                    <span class="note">Pick Time</span> */}
                <br/>
                <br/>
                {(position === 2)&&
                <Button aria-label="" role="button" tabIndex="0" onClick={this.submitState2.bind(this)}>
                    Continue
                </Button>
                }
                </div>
                }
            </AccountBlock>     
            <AccountBlock> 
                <Title> Order Summary </Title>
                { ( position >= 3 ) &&
                <div>
                <CheckoutBlock costMap={costMap} cart={cart} total={total} />
                <br/>
                {(position === 3)&&
                <Button aria-label="" role="button" tabIndex="0" onClick={this.submitState3.bind(this)}>
                    Continue
                </Button>
                }
                </div>
                }
            </AccountBlock>     
            <AccountBlock> 
                <Title> Payment</Title>
                { ( position >= 4 ) &&
                <div>
                <Form>
                    <label htmlFor="cardname">Name on the Card:</label>
                    <input type="text" name="cardname" id="cardname" />
                    <br />
                    <label htmlFor="cardnumber">Card Number:</label>
                    <input type="text" name="cardnumber" id="cardnumber" />
                    
                    <GridSeparate2>
                        <div>
                            <label htmlFor="expiration-month">Exp Month:</label>
                            <input type="text" name="expiration-month" id="expiration-month" />
                        </div>
                        <div>
                            <label htmlFor="expiration-year">Exp Year:</label>
                            <input type="text" name="expiration-year" id="cardnumber" />
                        </div>
                        <div>
                            <label htmlFor="cvv">CVV:</label>
                            <input type="text" name="cvv" id="cvv" />
                        </div>
                        <div>
                            <label htmlFor="zipcode">Zip Code:</label>
                            <input type="text" name="zipcode" id="zipcode" />
                        </div>
                    </GridSeparate2>
                
                </Form>
                <br/>
                <Button aria-label="" role="button" tabIndex="0" onClick={this.submitOrder.bind(this)}>
                    Place Order
                </Button>
                </div>
                }
            </AccountBlock>     
            </Wrapper>  
            </Container> 
        )
    }
}

let mapStateToProps = (state) => {
    let { categories, items, cart, costMap, user } = state;
    let sum = cart.reduce((a, c) => a + c.price, 0)
    let shipping = sum >= 100 ? 0 : 10;
    let tax = (sum * 0.08);
    let resturant = state.resturants.find((c)=> (c.id === state.user.resturantId));
    return {  resturant, cart: cart, total: { sum: sum, shipping: shipping, tax: tax }, costMap:costMap };
};

let mapDispatchToProps = (dispatch) => ({
    updateOrder: (order) => { dispatch({ type: 'SET_ORDER', payload: order }) }
});

let CheckoutScreenState = connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutScreen);

export default withRouter(CheckoutScreenState);


let FlexBetween = styled.div`
    display: flex;
    justify-content: space-between;
`;

let Wrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
`;
let BR = styled.div`
    width: 100%;
    height: 2px;
    background-color: black;
    margin: 4rem 0;
`;

let AccountBlock = styled.div`
    padding: 4rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    text-align: left;
    margin-bottom: 4rem;

`;
let Button = styled.button`
    flex: 1;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    padding: 1rem;
    background-color: #F36C3E;
    background-color: #FFA310
    color: white;
    color: black;
    &:hover {
    }
    span {
        text-transform: uppercase;
    }
`;

let GridSeparate = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
`;
let GridSeparate2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
`;

let Title = styled.h1`
    margin-top: 0;
`;
let Form = styled.form`
    margin-top: 0;
    input {
    font-size: 16px;
    line-height: 22px;
    color: rgb(72, 72, 72);
    background-color: rgb(255, 255, 255);
    margin-bottom: 8px;
    position: relative;
    z-index: 0;
    display: block;
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(219, 219, 219);
    border-radius: 2px ;
    width: 100%;
    margin: 0 0 15px;
    padding: 8px;
    box-sizing: border-box;
  
    margin: 0 auto;
    tex-align: left;
  }
`;

let DropDownButtonStyled = styled(DropdownButton) `
    border: none;
   
    button {
        background-color: #red
        border: none !important;
         width: 200px;
    }
    
`;

{/* <Button2 aria-live="assertive" onClick={() => {
    dispatch({ type: "ADD_TO_CART", payload: { item } });
    history.push('/');
}} aria-label={`add to cart ${item.name} `} role="button" tabIndex="0"> Add to Cart</Button2> */}