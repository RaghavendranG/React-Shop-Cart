import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';


function Nav({ count })   {

    return(
        <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div className="container">
         <div className="d-flex">
                        <button className="cart btn btn-light border border-dark" type="button">
                            {/* FaShoppingCart is cart icon from react, number of count from cart  */}
                            <FaShoppingCart /> Cart <span className="cart-count">{count}</span>  
                        </button>
                    </div>

                    {/* </div> */}
                   
                </div>
            </nav>
        </>
    );
}
export default Nav;
