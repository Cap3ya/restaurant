import image from '../images/brand.jpg'

function Brand () {
    const element = document.createElement('main');
    element.id = "brand";
    element.classList = "flex_row"
    element.innerHTML = `
<div class="flex_row">

    <img src="${image}" alt="Someone holding Two burgers" width="300"/>

    <div>
        <h1>Tasty's</h1>
        <h2>Ethical Brand</h2>
        <h3>What Sets Us Apart</h3>

        <p> We use the finest, locally sourced ingredients to craft our burgers.<br>
            Fresh, high-quality produce and premium meats ensure that every bite is bursting with flavor.<br>
            Our culinary team is dedicated to creating unique and unforgettable flavor combinations.<br>
            From classic cheeseburgers to adventurous creations, we have something for every palate.<br>
        </p>
    </div>
</div>`

    return element;
}

export default Brand;
