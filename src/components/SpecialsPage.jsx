import React from 'react'
import './styles/SpecialsPage.css'
import GreekSalad from '../assets/Greek-Salad.webp'
import Card from './Card'
import Bruchetta from '../assets/Bruchetta.jpg'
import LemonDesert from '../assets/Lemon Dessert.jpeg'
import ListItem from './ListItem'
import GrilledFish from '../assets/GrilledFish.jpg'
import Pasta from '../assets/Pasta.webp'
import Steak from '../assets/Steak.jpg'
import Font from 'react-font'

const SpecialsPage = () => {
    return (
        <div className="section2">
            <div className="container-section2">
                <div className="s2-1">
                    <Font family="Karla">
                        <h1 id="specials">Specials</h1>
                    </Font>
                    <Font family="Roboto">
                        <button id="button2">Online Menu</button>
                    </Font>
                </div>
                <div className="s2-2">
                    <Card
                        imageSrc={GreekSalad}
                        title="Greek Salad"
                        price="$12.99"
                        description="The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                    />
                    <Card
                        imageSrc={Bruchetta}
                        title="Bruchetta"
                        price="$5.99"
                        description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
                    />
                    <Card
                        imageSrc={LemonDesert}
                        title="Lemon Dessert"
                        price="$5.00"
                        description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. "
                    />
                </div>

                <div className="above-list">
                    <h1 id="text-above-list">ORDER FOR DELIVERY!</h1>
                    <div className="horizontal-list">
                        <button id="list-btn">Lunch</button>
                        <button id="list-btn">Mains</button>
                        <button id="list-btn">Desserts</button>
                        <button id="list-btn">A La Carte</button>
                        <button id="list-btn">Specials</button>
                    </div>
                </div>

                <div className="scrollable-list">
                    <ListItem
                        imageSrc={GreekSalad}
                        title="Greek Salad"
                        price="$12.99"
                        description="The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                    />
                    <ListItem
                        imageSrc={Bruchetta}
                        title="Bruchetta"
                        price="$5.99"
                        description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
                    />
                    <ListItem
                        imageSrc={GrilledFish}
                        title="Grilled Fish"
                        price="$20.00"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus."
                    />
                    <ListItem
                        imageSrc={Pasta}
                        title="Pasta"
                        price="$18.99"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare."
                    />
                    <ListItem
                        imageSrc={Steak}
                        title="Steak"
                        price="$30.00"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae."
                    />
                </div>
            </div>
        </div>
    )
}

export default SpecialsPage
