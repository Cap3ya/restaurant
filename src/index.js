// Css
import './style.css'
//Pages
import Home from './pages/Home.js';
import Brand from './pages/Brand.js'
import Menu from './pages/Menu.js';
import Header from './pages/Header.js';
import Footer from './pages/Footer.js';
//Helpers
import * as f from './modules/helperFunctions.js';

const App = (function ()  {
    function listen () {
        f.onEvent('.tabs', 'click', tab => {render(tab.id); tabActive.Get(tab.id)} );
        
    }
    const tabActive = {
        new: "home",
        old: "",
    
        Get (id) {
            this.old = this.new;
            this.new = id;
            this.Set();
        },
        Set () {
            this.old != "" && this.Remove(this.old)
            this.Create(this.new)
        },
        Remove () {
            document.querySelector(`#${this.old}`).classList.remove("tabActive")
        },
        Create () {
            document.querySelector(`#${this.new}`).classList.add("tabActive")
        },
    }
    function render (id) {
        if (id != undefined ) {
            const [header, main, footer] = view(id)
            document.querySelector('main').replaceWith(main)
        } else {
            const root = document.querySelector('#app');
            view().forEach(child => root.appendChild(child));
        }
    }
    function view (id) {
        const Main = 
            id == "menu" ? Menu() : 
            id == "brand" ? Brand() :
            Home()
        return [
            Header(), 
            Main,
            Footer()
        ]
    }
    return { render, listen }
})();

App.render()
App.listen()
