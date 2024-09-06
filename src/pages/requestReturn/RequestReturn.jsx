import React from 'react';
import Styles from "./requestReturn.module.css";

export function RequestReturn() {
    

    return (
        <div className={Styles.requestReturn}>
            <h2>What can be returned</h2>
            <p >
                Once the order is marked as 'delivered', you can request a return under certain conditions.
            </p>
            
            <h2>What can be returned under the Order Protection fee?</h2>
            <p>
                Order Protection fee will apply if you receive an item that is considerably different than described in the seller's description, or if your item is damaged in transit. In practice, this implies:
            </p>
            <ul>
                <li>The item(s)' size, material, colour or condition is not as indicated by the seller on the listing;</li>
                <li>The item's size is not available (e.g., doesn’t have a label) and this was not disclosed in the listing;</li>
                <li>The item(s) is/are missing some parts mentioned on the seller's listing;</li>
                <li>The item(s) is damaged - it is stained, ripped, broken, holed or damaged in any other way that wasn’t detailed in the seller's description, pictures, or comments;</li>
                <li>The parcel and the item(s) inside were damaged in transit.</li>
            </ul>
            
            <p>
                In most cases described above, your return request will be forwarded to the seller for inspection and action. If the seller accepts, your request will be authorised, and you will be required to mail the item(s) back. If the seller disagrees with the return or does not answer within three days, our Support staff will investigate and make a final decision.
            </p>
            
            <h2>What if I changed my mind or the item doesn't quite fit me?</h2>
            <p>
                In these circumstances, we encourage that you repost the item to your closet and resell it, rather than filing a refund request; since you liked it, chances are that someone else will, too! Just remember to update the seller's images with your own.
            </p>
        </div>
    );
}