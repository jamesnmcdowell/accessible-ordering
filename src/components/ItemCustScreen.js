import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { media, Container, Container2 } from './Media';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Cart from './Cart';



class ItemCustScreen extends React.Component {
    constructor (props) {
        super(props);
        let catOrder = Object.keys(props.item.ingredients)
          
        this.state = {
            defaultIngredients: Object.keys(props.item.ingredients).reduce((a, c) => (
                [...a, ...Object.keys(props.item.ingredients[c]).filter((cc) => (props.item.ingredients[c][cc]))]
            ), []),
            catOrder,
            focusCat: null,
            curIngredients: { ...props.item.ingredients},
            catCustOpen: catOrder.reduce((a, c) => {
                a[c] = true;
                return a;
            },{})
        };
    }
   
    componentDidUpdate (prevProps) {
        if(this.state.focusCat) {
            document.querySelector(`#${this.state.focusCat}_0_input`).focus();
            this.setState({focusCat: null});
        }
    }

    openCatCust (cat) {
        this.setState({
            focusCat: cat,
            catCustOpen: {
                ...this.state.catCustOpen,
                [cat]: true
            }
        });
    }

    toggleIngredient(cat, ingred) {
        let ingreds = this.state.curIngredients;
        ingreds[cat][ingred] = !ingreds[cat][ingred];
        this.setState({
            curIngredients: ingreds
        });
    }

    selectIngredient(cat, ingred) {
        let ingreds = this.state.curIngredients;
        for (let key in ingreds[cat]) {
            ingreds[cat][key] = (key === ingred);
            
        }
     
        this.setState({
            curIngredients: ingreds
        });
    }

    addToCart () {
        let current = Object.keys(this.state.curIngredients).reduce((a, c) => (
            [...a, ...Object.keys(this.state.curIngredients[c]).filter((cc) => (this.state.curIngredients[c][cc]))]
        ), []);
        let defaultIngreds = new Set([...this.state.defaultIngredients, 'small', 'medium', 'large']);
        let added = current.filter( (c) => (!defaultIngreds.has(c)));
        console.log(added);
        let item = { ...this.props.item, ingredients: this.state.curIngredients };
        let size = Object.keys(this.state.curIngredients.size).filter((c) => { return this.state.curIngredients.size[c] } )[0];
        console.log(size);
        let payload = {
            type: "ADD_TO_CART",
            payload: {item, size, added }
        };
        console.dir(payload);
        this.props.dispatch(payload); 
        this.props.history.push('/'); 
    }

    render () {
        let {match, item, cost} = this.props,
            { catCustOpen, curIngredients, catOrder, defaultIngredients } = this.state;


        return (
            <Flex>
            <div>
            <Container vert>
                    <Name> {item.name} </Name>
                    <Gridlist>
                        {catOrder.map((c, i) =>
                            <Section key={`custcat${c}`}>
                                <div>
                                    <CatTitle aria-label="{`${c}`}"> {c}</CatTitle>

                                    <SelectedSpan aria-label={`Current ${c} Selection`} >
                                    Selected:
                                    {
                                            Object.keys(item.ingredients[c])
                                                .filter((cc) => (item.ingredients[c][cc]))
                                            .reduce((a, c, i) => (`${a}${(i === 0) ? c : `, ${c}`   }`),' '  )

                                        }
                                     </SelectedSpan>
                                </div>
                            {(catCustOpen[c])?
                                (
                                    
                                    <form> 
                                    <fieldset>
                                        <legend aria-label={`${c} customizations`} tabIndex="0" id={`${c}_legend`}> </legend>
                                    <ChoiceGrid>
                                    {
                                    Object.keys(item.ingredients[c]).sort((a,b) => {
                                        switch (a) {
                                            case 'small':
                                                return (b === 'small') ? 0 : -1;
                                            case 'medium':
                                                return (b === 'medium') ? 0 : ((b === 'small') ? 1 : -1);
                                            case 'large':
                                                return (b === 'large') ? 0 : 1;
                                            default:
                                                return a.localeCompare(b);
                                        }
                                        })
                                          .map((cc, i) => (
                                              <div aria-label={`${cc}${(cost[c][cc] > 0 && !(defaultIngredients.includes(cc))) ? ` (+ ${(cost[c][cc])} dollars)` : ''}`}>
                                                <input 
                                                    id={`${c}_${i}_input`}
                                                    aria-label={`${cc}${(cost[c][cc] > 0 && !(defaultIngredients.includes(cc))) ? ` (+ ${(cost[c][cc])} dollars)` : ''}`}
                                                    aria-labelledby={`${cc}${(cost[c][cc] > 0 && !(defaultIngredients.includes(cc))) ? ` (+ ${(cost[c][cc])} dollars)` : ''}`}
                                                    role="checkbox"  
                                                    type={(c === 'bread' || c === 'size' ) ? 'radio' : 'checkbox'} 
                                                    name={c} 
                                                    value={cc} 
                                                    tabIndex="0"
                                                    aria-checked={(item.ingredients[c][cc]) ? "true" : "false" }  
                                                    defaultChecked={(item.ingredients[c][cc])? true : false}  
                                                    onClick={(c === 'bread' || c === 'size') ? this.selectIngredient.bind(this, c, cc) : this.toggleIngredient.bind(this, c, cc)}
                                                />
                                                  <label aria-label={`${cc}${(cost[c][cc] > 0 && !(defaultIngredients.includes(cc))) ? ` (+ ${(cost[c][cc])} dollars)` : ''}`}
                                                         htmlFor={`${c}_${i}_input`}>{`${cc}${(cost[c][cc] > 0 && (!(defaultIngredients.includes(cc) ) || (cc === 'small'))) ? ` (+$${(cost[c][cc])})` : ''}`}</label>               
                                              </div>    
                                        ))
                                    }
                                    </ChoiceGrid>
                                    </fieldset>
                                    </form>
                                ) : (
                                    <div> 
                                  
                                            <Button 
                                                aria-label={`${c} Customization`} 
                                                onClick={this.openCatCust.bind(this, c)}
                                            > 
                                            <span aria-label={`${c} Customization`} >Customize {c}</span></Button>
                                    </div>
                                )
                            }
                            </Section>
                        )}
                    </Gridlist>
                    <div>
                        <CatTitle>Customization Summary</CatTitle>
                        {catOrder.map((c, i) =>
                        <SelectedSpan aria-label={`Current ${c} Selection`} >
                                <BoldP>{c}:</BoldP>
                                    {
                                Object.keys(item.ingredients[c])
                                    .filter((cc) => (item.ingredients[c][cc]))
                                    .reduce((a, c, i) => (`${a}${(i === 0) ? c : `, ${c}`}`), ' ')
                            }
                        </SelectedSpan>

                        )}
                    </div>

                    <Button aria-label="add customized item to cart" onClick={this.addToCart.bind(this)}  > Add to Cart </Button>
        
            </Container>
                </div>
            <CartStyled />
                   
            </Flex>
           
        )
    };

}

let mapStateToProps = (state, props) => {
    let { match } = props;
    let { categories, items, cost } = state;
    let itemId = parseInt(match.params.itemId, 10);
    let item = items.find((obj) => obj.id === itemId);
    console.log(item);
    // let relatedProducts = products.filter((obj) => obj.categoryId === product.categoryId && obj.id !== product.id).slice(0, 3);
    return { item, cost };
};

let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
};

let ItemCustScreenState = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemCustScreen);

export default ItemCustScreenState;


let Gridlist = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3rem;
    margin-bottom: 4rem; 
`;
let ChoiceGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    grid-gap: 1rem;
`;
let Name = styled.h1`
    text-transform: uppercase;
`;

let Section = styled.div`
    border: 2px #828282 solid;
    padding 2rem;
`;
let CatTitle = styled.h2`
    text-transform: uppercase;
`;
let SelectedSpan = styled.p`
    font-weight: 300;
`;
let InvisDiv = styled.div`
    height: 20px;
    background-color: red;
`;

let Button = styled.button `
    flex: 1;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    padding: 1rem;
    background-color: #F36C3E;
    color: white;
    &:hover {
    }
    span {
        text-transform:capitalize;
    }
`;
let Input = styled.input `
    border: 0                      !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
            clip-path: inset(50%) !important;
    height: 1px                    !important;
    overflow: hidden               !important;
    padding: 0                     !important;
    position: absolute             !important;
    width: 1px                     !important;
    white-space: nowrap            !important;

    &:focus + label::before {
        box-shadow: 0 0 0 2px rgba(51, 51, 51, 0.4) !important;
    }
    &:hover + label::before{
        border-color: #000;    
    }
    &:active + label::before{
        transition-duration: 0;    
    }
    + label{
        position: relative;
        padding: 6px;
        -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;   
    }
    + label::before{
        background-color: #fff;
        border: 1px solid #444;
        box-sizing: content-box;
        content: '';
        color: #444;
        margin-right: 6px;
        top: 50%;
        left: 0;
        width: 24px;
        height: 24px;
        display: inline-block;
        vertical-align: middle;  
    }
    + label::after{
        box-sizing: content-box;
        content: '';
        background-color: #444;
        position: absolute;
        top: 50%;
        left: 10px;
        width: 18px;
        height: 18px;
        margin-top: -9px;
        -webkit-transform: scale(0);
                transform: scale(0);
        -webkit-transform-origin: 50%;
                transform-origin: 50%;
        transition: -webkit-transform 200ms ease-out;
        transition: transform 200ms ease-out;
        transition: transform 200ms ease-out, -webkit-transform 200ms ease-out;  
    }

`;

let Flex = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2em;
    width: 100%;
    ${media.desktop`
     grid-template-columns: 1fr 400px;
    `}
`;
let CartStyled = styled(Cart) `
    position: fixed;
    margin-top: 40px;
    
`;
let BoldP = styled.span `
    text-transform: uppercase;
    font-weight: 500;
    
`;





// [type="checkbox"] + label::before, [type="checkbox"] + label::after {
//   border-radius: 0;
// }
// [type="checkbox"] + label::after {
//   background-color: transparent;
//   top: 50%;
//   left: calc(6px + 1px + 24px/5);
//   width: 12px;
//   height: 4.8px;
//   margin-top: calc(24px / -2 / 2 * 0.8);
//   border-style: solid;
//   border-color: #444;
//   border-width: 0 0 3px 3px;
//   border-radius: 0;
//   -o-border-image: none;
//      border-image: none;
//   -webkit-transform: rotate(-45deg) scale(0);
//           transform: rotate(-45deg) scale(0);
//   transition: none;
// }
// [type="checkbox"]:checked + label::after {
//   content: '';
//   -webkit-transform: rotate(-45deg) scale(1);
//           transform: rotate(-45deg) scale(1);
//   transition: -webkit-transform 200ms ease-out;
//   transition: transform 200ms ease-out;
//   transition: transform 200ms ease-out, -webkit-transform 200ms ease-out;
// }

// [type="radio"] + label::before, [type="radio"] + label::after {
//   border-radius: 50%;
// }
// [type="radio"]:checked:active + label::before, [type="radio"]:checked:focus + label::before {
//   -webkit-animation: none;
//           animation: none;
//   -webkit-filter: none;
//           filter: none;
//   transition: none;
// }
// [type="radio"]:checked + label::before {
//   -webkit-animation: none;
//           animation: none;
//   background-color: #fff;
// }
// [type="radio"]:checked + label::after {
//   -webkit-transform: scale(1);
//           transform: scale(1);
// }



