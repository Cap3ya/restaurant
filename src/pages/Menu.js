import burger1 from '../images/Menu_Burger01.jpg'
import burger2 from '../images/Menu_Burger02.jpg'
import burger3 from '../images/Menu_Burger03.jpg'
import burger4 from '../images/Menu_Burger04.jpg'
import burger5 from '../images/Menu_Burger05.jpg'


function Menu () {
    const element = document.createElement('main');
    element.classList = "flex_row"
    element.innerHTML = `
<div style="max-width:750px">
    <h1>Tasty's</h1>
    <h2>Delicious Menu</h2>
    <div class="flex_row" style="gap:2em">
    <div>
        <h3>Classic Burgers</h3>
        <img src="${burger1}" alt="Classic Burgers" width="300"/>
    </div>

    <div>
        <h3>Tasty Cheeseburger</h3>
        <img src="${burger2}" alt="Classic Burgers" width="300"/>
    </div> 

    <div>
        <h3>Tasty Bacon Burger</h3>
        <img src="${burger3}" alt="Classic Burgers" width="300"/>
    </div>  

    <div>
        <h3>Veggie Delight</h3>
        <img src="${burger4}" alt="Classic Burgers" width="300"/>
    </div>

    <div>
        <h3>Signature Burgers</h3>
        <img src="${burger5}" alt="Classic Burgers" width="300"/>
    </div>
    </div>
</div>`;

    return element;
}

export default Menu;