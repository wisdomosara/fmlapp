import React, { Component } from 'react';
import { Navbar, Footer } from '../../navigation/navigation';
import '../../../assets/bootstrap.css';
import styles from './Fundcampaign.module.css';
import head from './images/head.png';
import tag from './images/tag.png';


class EachCampaign extends Component {
    state = {  }
    render() { 
        let span1 = {
            color: "#FB3F5C"
        }
        let span2 = {
            marginRight: 10
        }
        return (  
            <div className={styles.campaign_component}>
                <div className={['mb-4', styles.line].join(" ")}></div>
                <div className="container">
                    <h3>Fund John Doe laptop purchase</h3>
                    <div className="row mb-4">
                        <div className={['col-12', styles.details_row].join(" ")}>
                            <img src={head} className={['float-left',styles.row_img].join(" ")}></img>
                            <div className={["d-flex flex-wrap align-items-center", styles.details_flex].join(" ")}>
                                <div className='mr-5'>
                                    <h3>by <span style={span1}>John Doe</span><span><img className="ml-2" src={tag}className={styles.img2}></img></span></h3>
                                </div>
                                <div className="pt-2">
                                    <p><span style={span2}>1 Campaign Created</span><span style={span2}>|</span>  <span style={span2}>Lagos, Nigeria</span><span style={span2}>|</span><span style={span2}>12/08/2020</span></p>
                                </div>
                            </div>
                        </div>
                        <div className={['container mb-4', styles.description].join(" ")}>
                            <p>I run a small freelancing business in the heart of Lagos. My former laptop finally packed up after several attempts at refurbishing it, I would like a loan to get a new laptop to continue my business. My business loremipsum.com generates enough money to repay the loan in three months. I would really appreciate funding for this campaign. Thank you for your time 🙂...........</p>
                            <div className={styles.progress_div}>
                                <div className="row">
                                    <div className="col-9">
                                        <h3>Raised : NGN 65,200 of NGN 250,000</h3>
                                    </div>
                                    <div className="col-3">
                                        <h3 className="float-right">36.54%</h3>
                                    </div>
                                </div>
                            </div>
                            <div className={[styles.progress, 'mb-4'].join(" ")}>
                                <div className={styles.progress_bar}></div>
                            </div>
                            <div className={['d-flex flex-wrap', styles.button_flex].join(" ")}>
                                <button className={styles.btn1}>FUND THIS CAMPAIGN</button>
                                <button className={styles.btn2}>SHARE THIS CAMPAIGN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default class FundCampaign extends Component {
    render() {
        let load = {
            width:120,
            height:60,
            backgroundColor: "#FB3F5C"
        }
        return (
            <div className={styles.body}>
                <Navbar />
                    {/* Heading row */}
                    <div className={styles.heading_row}>
                        <div className={['container d-flex justify-content-between align-items-center py-3 flex-xs-column', styles.heading_flex].join(" ")}>
                            <div className={styles.header_left}>
                                <h1>Available Campaigns</h1>
                            </div>
                            <div className={styles.header_right}>
                                <select>
                                    <option value="sort">Sort by</option>
                                    <option value="popular">Popular</option>
                                    <option value="latest">Latest</option>
                                    <option value="oldest">Oldest</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <EachCampaign />
                    <EachCampaign />
                    <EachCampaign />
                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <button className="btn btn-sm btn-danger" style={load}>Load More</button>
                    </div>
                
                <Footer />
            </div>
        )
    }
}
