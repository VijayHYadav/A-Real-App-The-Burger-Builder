import React, { Component } from "react";

import Auxi from "../hoc/Auxi";
import Burger from "../components/Burger/Burger";

class BurgerBuilder extends Component {

    // old school
    // constructor() {
    //     super(props);
    //     this.state = {...}
    // }

    // new school
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render() {
        return (
            <Auxi>
                <Burger ingredients={this.state.ingredients}/>
                <div>
                    Build Controls
                </div>
            </Auxi>
        );
    }
}

export default BurgerBuilder;