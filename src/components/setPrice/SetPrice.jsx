import React from 'react';
import Styles from "./setPrice.module.css";

export function SetPrice() {
     

    return (
        <div className={Styles.setPrice}>
            <p>How to set a correct price?</p><br />
            <p>Use the tips to price your item better:</p>
            <table>
                <thead>
                    <tr>
                        <th>Item condition</th>
                        <th>Suggested price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>New with tags & New without tags</td>
                        <td>80%-60% of the retpail price</td>
                    </tr>
                    <tr>
                        <td>very good</td>
                        <td>60%-40% of the retail price</td>
                    </tr><tr>
                        <td>Good & Satisfactory</td>
                        <td>40%-20% of the retail price</td>
                    </tr>
                </tbody>
            </table>
            <span>Good to know:</span>
                <p>&#8226; Search the catalogue for similar items to see how other members price them.</p>
                <p>&#8226; Setting a price that's lower than our catalogue average price will help you sell faster.</p>
                <p>&#8226; You can change the price of your item by editing your listing.</p>
        </div>
    );
}