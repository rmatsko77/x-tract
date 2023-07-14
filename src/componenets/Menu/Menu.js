import React from 'react'
import './Menu.css'

function Menu() {
    return (
        <div id='menu' className='menu-container'>
            <h4>Menu</h4>
            <div className='drinks'>
                <div className='alcohol'>
                    <div className='beer-container'>
                        <h5>Cocktails - $12</h5>
                        <ul className='cocktails'>
                            <li className='cocktail'><span className='cocktail-name'>Margarita</span>Patron, Triple Sec, Fresh Lime, Salted Rim</li>
                            <li className='cocktail'><span className='cocktail-name'>Old Fashioned</span>Burbon, Angostura bitters, Orange Rind</li>
                            <li className='cocktail'><span className='cocktail-name'>Moscow Mule</span>Vodka, Ginger Beer, Fresh Lime</li>
                            <li className='cocktail'><span className='cocktail-name'>Negroni</span>Gin, Campari, Sweet Red Vermouth</li>
                            <li className='cocktail'><span className='cocktail-name'>Mojito</span>White Rum, Fresh Lime, Mint, Simple Syrup</li>
                        </ul>
                    </div>
                    <div className='beer-container'>
                        <h5>Beer</h5>
                        <h6>Draft - $6</h6>
                        <ul className='beer-list'>
                            <li className='beer'>House Marg<span className='beer-description'> Pilsner / 5%</span></li>
                            <li className='beer'>Summer Shandy<span className='beer-description'> Shandy / 4.3%</span></li>
                            <li className='beer'>Mountain Haze<span className='beer-description'> IPA / 6.8%</span></li>
                            <li className='beer'>Unified Press<span className='beer-description'> Cider / 4.8%</span></li>
                            <li className='beer'>Raging Bitch<span className='beer-description'> IPA / 7.5%</span></li>
                        </ul>
                        <h6 className='can'>Can/Bottle - $4</h6>
                        <ul className='beer-list'>
                            <li className='beer'>Miller High Life<span className='beer-description'> Bottle</span></li>
                            <li className='beer'>Corona<span className='beer-description'> Bottle</span></li>
                            <li className='beer'>Estrella Jalisico<span className='beer-description'> Can</span></li>
                            <li className='beer'>Bud Light<span className='beer-description'> Can</span></li>
                        </ul>
                    </div>
                </div>
                <div className='coffee'>
                    <h5>Coffee - 4$</h5>
                    <ul>
                        <li>Espresso</li>
                        <li>Cold Brew</li>
                        <li>Latte</li>
                        <li>Chai Latte</li>
                        <li>Americano</li>
                        <li>Cappuccino</li>
                    </ul>
                </div>
                <div className='food'>

                </div>
            </div>
        </div >
    )
}

export default Menu