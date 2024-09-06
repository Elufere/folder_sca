import React from 'react';
import Styles from "./policy.module.css";

export default function Policy() {
    const tableData = [
        { range: '100 - 1,999', value: '100:00' },
        { range: '2,000 - 10,999', value: '200:00' },
        { range: '11,000 - 19,999', value: '300:00' },
        { range: '20,000 - 29,999', value: '400:00' },
        { range: '30,000 - 39,999', value: '500:00' },
        { range: '40,000 upward', value: '1000:00' },
      ];

    return (
        <div className={Styles.policy}>
            <h1>Scavenge Privacy Policy</h1>
            <p>Effective Date: 21/08/2024</p>
            <p>Welcome to Scavenge, a Nigerian-based peer-to-peer e-commerce platform dedicated to the buying and selling of preloved items. Your privacy and security are of utmost importance to us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you use our platform, including details about the Order Protection Fee charged on each sold item to secure user transactions.</p>
            
            <h2>1. Information We Collect</h2>
            <h3>1.1 Personal Information</h3>
            <p>When you register on Scavenge, we collect personal information that you voluntarily provide, including:</p>
            <ul>
                <li>Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Physical Address</li>
                <li>Payment Information (e.g., bank account details, mobile money information)</li>
                <li>Gender</li>
                <li>Date of Birth</li>
                <li>User Profile Details (e.g., profile picture, biography)</li>
            </ul>

            <h3>1.2 Transaction Information</h3>
            <p>When you buy or sell items on Scavenge, we collect transaction details including:</p>
            <ul>
                <li>Order Details: Items bought or sold, prices, and transaction dates.</li>
                <li>Order Protection Fee: The fee charged on each sold item to provide transaction security.</li>
                <li>Third-party fee (Paystack).</li>
            </ul>

            <h3>1.3 Non-Personal Information</h3>
            <p>We also collect non-personal information that does not identify you directly, including:</p>
            <ul>
                <li>Device Information: IP address, browser type, operating system, and device identifiers.</li>
                <li>Usage Data: Information on how you interact with our platform, such as pages viewed, time spent, and actions taken (e.g., item listings, messaging).</li>
            </ul>

            <h3>1.4 Cookies and Tracking Technologies</h3>
            <p>We use cookies and similar tracking technologies to enhance your experience on Scavenge. These technologies help us remember your preferences, track usage patterns, and improve the functionality of our platform. You can manage your cookie preferences through your browser settings.</p>

            <h2>2. How We Use Your Information</h2>
            <h3>2.1 To Provide and Improve Our Services</h3>
            <p>We use your personal information to facilitate transactions, manage your account, and enhance the functionality of our platform.</p>

            <h3>2.2 To Manage Order Protection</h3>
            <p>The Order Protection Fee is charged on each sold item to secure transactions. We use this fee to offer buyer and seller protection, ensuring safe and reliable transactions.</p>

            <h3>2.3 To Communicate with You</h3>
            <p>We may use your contact information to send you updates, notifications, and marketing communications (with your consent).</p>

            <h3>2.4 To Ensure Security</h3>
            <p>We use your information to detect and prevent fraud, abuse, and other harmful activities.</p>

            <h3>2.5 To Comply with Legal Obligations</h3>
            <p>We may use your information to comply with applicable laws, regulations, and legal processes.</p>

            <h2>3. How We Share Your Information</h2>
            <h3>3.1 With Other Users</h3>
            <p>Your profile information (such as your username, profile picture, and listings) will be visible to other users on the platform. Buyers and sellers may also exchange contact information to facilitate transactions.</p>

            <h3>3.2 With Service Providers</h3>
            <p>We may share your information with third-party service providers who assist us in operating our platform, such as payment processors, hosting services, and customer support providers. These providers are obligated to protect your information and only use it for the purposes for which it was shared.</p>

            <h3>3.3 For Legal and Safety Reasons</h3>
            <p>We may disclose your information if required to do so by law or in response to a valid legal request. We may also disclose your information to protect the rights, property, or safety of Scavenge, our users, or the public.</p>

            <h3>3.4 In the Event of a Business Transfer</h3>
            <p>If Scavenge is involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction. We will notify you before your information is transferred and becomes subject to a different privacy policy.</p>

            <h2>4. Order Protection Fee</h2>
            <h3>4.1 Purpose of the Fee</h3>
            <p>The Order Protection Fee is a mandatory charge applied to each item sold on Scavenge. This fee is used to secure transactions, providing both buyers and sellers with protection against fraud, non-delivery, or other issues that may arise during the transaction process. The prices and corresponding charges are as follows:</p>
            
            <div className={Styles.priceTable}>
                <table>
                    <thead>
                    <tr>
                        <th>Range</th>
                        <th>Value (&#8358;) </th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((item, index) => (
                        <tr key={index}>
                        <td>{item.range}</td>
                        <td>{item.value}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <h3>4.2 Fee Usage</h3>
            <ul>
                <li>Buyer Protection: Ensuring that buyers receive their purchased items as described.</li>
                <li>Seller Protection: Safeguarding sellers against fraudulent claims and ensuring they receive payment for sold items.</li>
                <li>Dispute Resolution: Facilitating a fair and transparent resolution process in case of disputes.</li>
            </ul>

            <h2>5. Your Rights and Choices</h2>
            <h3>5.1 Access and Correction</h3>
            <p>You have the right to access and correct your personal information at any time by logging into your account settings.</p>

            <h3>5.2 Data Portability</h3>
            <p>You have the right to request a copy of your personal data in a structured, commonly used, and machine-readable format.</p>

            <h3>5.3 Deletion</h3>
            <p>You can request the deletion of your account and personal information. Please note that we may retain certain information as required by law or for legitimate business purposes.</p>

            <h3>5.4 Opt-Out of Marketing Communications</h3>
            <p>You can opt out of receiving marketing communications from us by following the unsubscribe instructions provided in those emails or by adjusting your account settings.</p>

            <h2>6. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the Internet or electronic storage is completely secure.</p>

            <h2>7. Children’s Privacy</h2>
            <p>Scavenge is not intended for use by individuals under the age of 15. We do not knowingly collect personal information from children. If we learn that we have collected personal information from a child under 15, we will take steps to delete that information.</p>

            <h2>8. International Data Transfers</h2>
            <p>As a Nigerian-based platform, your information will be processed and stored in Nigeria. If you are accessing our platform from outside Nigeria, please be aware that your information may be transferred to and processed in Nigeria. By using Scavenge, you consent to this transfer.</p>

            <h2>9. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the new Privacy Policy on our platform and updating the effective date. We encourage you to review this policy periodically.</p>

            <h2>10. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:</p>
            <p>Scavenge Customer Support<br/>
            Email: scavengeng@gmail.com<br/>
            Phone: [+234 904 333 9228]<br/>
            Address: 1 Taiwo Street, Ikosi Lagos, Nigeria</p>

            <p>By using Scavenge, you agree to the terms of this Privacy Policy, including the Order Protection Fee. Thank you for trusting us with your personal information and transactions.</p>
        </div>
    );
}