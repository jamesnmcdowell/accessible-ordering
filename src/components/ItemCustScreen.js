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



    render () {
        let {match, item, dispatch, history} = this.props,
            { catCustOpen, curIngredients, catOrder } = this.state;
            console.log(catCustOpen);

        return (
            <Container2>
                <div>
                    <h1> {item.name} </h1>
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
                                    Object.keys(item.ingredients[c]).sort()
                                          .map((cc, i) => (
                                              <div>
                                                <input 
                                                    id={`${c}_${i}_input`}
                                                    aria-label={cc} 
                                                    role="checkbox"  
                                                    type={(c === 'bread')? 'radio' : 'checkbox'} 
                                                    name={c} 
                                                    value={cc} 
                                                    defaultChecked={(item.ingredients[c][cc])? true : false}  
                                                    onClick={(c === 'bread') ? this.selectIngredient.bind(this, c, cc) : this.toggleIngredient.bind(this, c, cc)}
                                                />
                                                <label htmlFor={cc}>{cc}</label>               
                                              </div>
                                        ))
                                    }
                                    </fieldset>
                                    </form>
                                ) : (
                                    <div> 
                                  
                                            <Button aria-label={`${c} Customization`} onClick={this.openCatCust.bind(this, c)}> <span aria-label={`${c} Customization`} >Customize {c}</span></Button>
                                    </div>
                                )
                            }
                            </Section>
                        )}
                    </Gridlist>
                    <Button aria-label="add customized item to cart" onClick={() => { dispatch({ type: "ADD_TO_CART", payload: item }); history.push('/'); }}  > Add to Cart </Button>
                </div>
            </Container2>
        )
    };

}

let mapStateToProps = (state, props) => {
    let { match } = props;
    let { categories, items } = state;
    let itemId = parseInt(match.params.itemId, 10);
    let item = items.find((obj) => obj.id === itemId);
    console.log(item);
    // let relatedProducts = products.filter((obj) => obj.categoryId === product.categoryId && obj.id !== product.id).slice(0, 3);
    return { item: item };
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
let Section = styled.div`
    border: 2px #828282 solid;
    padding 2rem;
`;
let CatTitle = styled.h2`
    text-transform:capitalize;
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

// .replace(/\b\w/g, l => l.toUpperCase())
    // box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
