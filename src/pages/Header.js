import logo from '../images/logo.png'
import icon_home from '../images/icon_home.png'
import icon_menu from '../images/icon_menu.png'
import icon_brand from '../images/icon_brand.png'

function Header () { 
    const element = document.createElement('header');
    element.innerHTML = `
    <div class= 'flex_column'>
        <img src="${logo}" alt="tasty's logo" width="200px"/>
        <h3>Burgers that Taste Yummy</h3>
    </div>
    <nav class=flex_row>
        <ul>
            <li id="home" class="tabs flex_row tabActive">
                <img src="${icon_home}" alt="Burger icons created by Smashicons - Flaticon" width="25px"/>
                <p>Home</p>
            </li>
            <li id="brand" class="tabs flex_row">
                <img src="${icon_brand}" alt="Burger icons created by Smashicons - Flaticon" width="25px"/>
                <p>Brand</p>
            </li>
            <li id="menu" class="tabs flex_row">
                <img src="${icon_menu}" alt="Burger icons created by Smashicons - Flaticon" width="25px"/>
                <p>Menu</p>
            </li>
        <ul>
    </nav>`;

    return element;
}

export default Header;
