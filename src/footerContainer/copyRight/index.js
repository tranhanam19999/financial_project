import React from 'react'

const CopyRight = () => {
    return (
        <div className="copyright__wrapper">
			<div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="copyright">
                            <div className="copy__right__inner text-left">
                                <p>Copyright <i className="fa fa-copyright"></i> <a href="https://freethemescloud.com/">Free themes Cloud.</a> All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="payment text-right">
                            <img src="images/icons/payment.png" alt=""/>
                        </div>
                    </div>
                </div>
			</div>
		</div>
    )
}
export default CopyRight