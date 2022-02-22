function navbar(){
    return`<div id="nav">
    <div id="uper">
        <div id="upperleft">
            <div>
                <select name="" id="">
                    <option value="">IND </option>
                    <option value="">USD </option>
                    <option value="">GPB </option>
                    <option value="">CAD </option>
                    <option value="">JPY </option>
                    <option value="">AUD </option>
                </select>
            </div>
            <div>
                Blogs
            </div>
            <div>Ingredients</div>
        </div>

        <div id="uppermid">
            <!-- <img src="https://cdn.shopify.com/s/files/1/0034/7901/1441/files/200x150-01_140x@2x.png?v=1640868807" alt=""> -->
            <h1>Deyga</h1>
        </div>

        <div id="upperright">
            <div>
                <input type="text" id="searchitem" placeholder=" SEARCH  PRODUCTS">
            </div>
            <div>
                <select name="" id="Account">
                    <option value=""> Account</option>
                    <option value=""> Wishlist</option>
                    <option value=""> Track Order</option>
                    <option value=""> logOut</option>
                </select>
            </div>
            <div>
                <div id="cartcount">Cart()</div>
           
            </div>
        </div>
        
    </div>
    <div id="lower">
        <div>Skin Care</div>
        <div>Hair Care</div>
        <div>Bath & Body</div>
        <div>Oral Care</div>
        <div>Wellness</div>
        <div>Baby Care</div>
        <div>Men</div>
        <div>Combo</div>
        <div>Gifting</div>
        <div>Offers</div>
    </div>
</div>`
}
export default navbar;