
import React from 'react';
import './payment.css';

const PaymentLink = () => {
return(
<div className="container cover">
        <div className="form-wrapper ">
            <div id="close">
                <h1>&times;</h1>
            </div>
            <div className="form-content">
            <div className="form-header">
                 <h1>Fund this Campaign</h1>
            </div>
                <form action="" method="">
                    <div className="row">
                        <label for="">Choose Your preferred method of payment</label>
                        <select className="col-md-12">
                            <option value="">Bank</option>
                        </select>
                        <label for="">How much do you plan to donate to this campaign</label>
                        <input className="col-md-12" type="text" placeholder="Enter Amount Here in Naira" />
                        <div className="split">
                            <div>
                                <label for="">Choose Bank </label>
                                <select name="" id="" className="col-md-12">
                                    <option value="">None</option>
                                </select>
                            </div>
                            <div>
                                <label for="">Account Number</label>
                                <input type="text" placeholder="Enter Account Number" />
                            </div>
                        </div>
                        <div className="split">
                            <div>
                                <label for="">Account Name</label>
                                <input type="text" placeholder="Enter Account Name" />
                            </div>
                            <div>
                                <label for="">OTP/ Token</label>
                                <input type="text" placeholder="Enter OTP/Token" />
                            </div>
                        </div>
                    </div>
                    <div className="but">
                    <button className="btn"><a href="./share.html">FUND NOW</a></button>
                    <p>Secured by Flutterwave</p></div>
                </form>
            </div>
        </div>
    </div>

)
}

export default PaymentLink;
