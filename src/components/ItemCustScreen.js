import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { media, Container, Container2 } from './Media';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



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
                a[c] = false;
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
        ingreds[cat] = Object.keys(ingreds[cat]).reduce((a, c) => {
            a[c] = (c === ingred);
            return a;
        }, {});

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
            console.log(item);
            console.log(defaultIngredients);


        return (
            <Container2>
                <div>
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
                                        <legend aria-label={`${c} customizations`} tabIndex="0" id={`${c}_legend`}> {c}</legend>
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
                                              <div>
                                                <input 
                                                    id={`${c}_${i}_input`}
                                                    aria-label={`${cc}${(cost[c][cc] > 0 && !(defaultIngredients.includes(cc))) ? ` (+ ${(cost[c][cc])} dollars)` : ''}`}
                                                    role="checkbox"  
                                                    type={(c === 'bread' || c === 'size' )? 'radio' : 'checkbox'} 
                                                    name={c} 
                                                    value={cc} 
                                                    defaultChecked={(item.ingredients[c][cc])? true : false}  
                                                    onClick={(c === 'bread' || c === 'size') ? this.selectIngredient.bind(this, c, cc) : this.toggleIngredient.bind(this, c, cc)}
                                                />
                                                  <label htmlFor={cc}>{`${cc}${(cost[c][cc] > 0 && (!(defaultIngredients.includes(cc) ) || (cc === 'small'))) ? ` (+$${(cost[c][cc])})` : ''}`}</label>               
                                              </div>
                                        ))
                                    }
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
                    <Button aria-label="add customized item to cart" onClick={this.addToCart.bind(this)}  > Add to Cart </Button>
                </div>
            </Container2>
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








