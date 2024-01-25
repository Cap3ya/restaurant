import image from '../images/Home.jpg'

function Home () {
    const element = document.createElement('main');
    element.id = "home"; element.classList = "flex_column";
    element.innerHTML = `
    <div class="flex_row">
        <img src="${image}" alt="Someone holding Two burgers" width="300"/>
        
        <div>
            <h1>Tasty's</h1>
            <h2>Introduction</h2>
            <h3>Welcome to <span>Tasty</h3>
            
            <p> Where we bring you a <span>mouthwatering</span> experience with our <span>delectable</span> burgers.<br>
                Our mission is simple: to serve <span>burgers</span> that are not just delicious but truly <span>yummy</span>.<br>
                Join us in this presentation to discover what makes Tasty a <span>must-visit</span> for burger enthusiasts.
            </p>
        </div>
    </div>`

    return element;
}

export default Home;