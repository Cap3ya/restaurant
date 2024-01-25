import social_rocket from '../images/social_rocket.svg'
import social_drop from '../images/social_drop.svg'
import social_diversity from '../images/social_diversity.svg'

function Footer () {

    const element = document.createElement('footer');
    element.innerHTML = `
    <div class="flex_row">
        <h2>Contact us</h2>
    </div>
    <div class="flex_row">
        <div>
        <h3>Address</h3>
        <p>123 hereWeAre St</p>
        <h3>Contacts</h3>
        <p>123 456 789</p>
        <h3>Follow</h3>
        <ul class="flex_row icons">
            <li class="flex_row icon" style="gap: 1ch">
                <img src="${social_rocket}" alt="Rocket Social Network Icon" height="25px"/>
            </li>
            <li class="flex_row" style="gap: 1ch">
                <img class="icon" src="${social_drop}" alt="Drop Social Network Icon" height="25px"/>
            </li>
            <li class="flex_row" style="gap: 1ch">
                <img class="icon" src="${social_diversity}" alt="Diversity Social Network Icon" height="25px"/>
            </li>
        </ul>
    </div>
    <form name="contactUs" class="flex_column" style="gap: 1ch">
        <h3>Message</h3>
        <label> Name
            <input id="name" type='text' >
        </label>
        <label> E-mail
            <input id="email" type='email' > 
        </label>
        <label> Message
            <textarea id="message" type='text' class="block"></textarea>
        </label>
        <button onclick=preventDefault()>Send</button>
        </form>
    </div>
    `;

    return element;
}

export default Footer;
