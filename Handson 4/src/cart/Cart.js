import React, { Component } from 'react';
import './Cart.css';
class Cart extends Component {

    render() {
        const items = this.props.item.map((item) => {
            return (
                <tr>
                    <td>{item.itemname}</td>
                    <td>{item.price}</td>
                </tr>
            )
        });
        return (
            <div className='div'>
                <table className='list'>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {items}
                </table>
            </div>
        )
    }
}

export default Cart;