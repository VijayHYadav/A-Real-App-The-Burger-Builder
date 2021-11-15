import React, { Component } from "react";

import Auxi from "../../../hoc/Auxi";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {

    // This could be a functional component, doesn't have to be class
    componentWillUpdate() {
        console.log("[OrderSummary] willUpdate");
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>
                        {igKey}
                    </span>: {this.props.ingredients[igKey]} 
                </li>)
        });

        return (
            <Auxi>
                <h3>Your Order</h3>
                <p>A deliciour burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelHandler}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinueHandler}>CONTINUE</Button>
            </Auxi>
        );
    }
}

export default OrderSummary;