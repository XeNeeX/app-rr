import React from 'react';
import Article from '../components/Article'

const articles = [
    {
        id:1,
        title:"Czym jest teoria strun?",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, nostrum, maxime culpa, amet quas est accusantium corrupti iusto molestiae aut repudiandae id minima laborum unde eius sapiente ea. Dolor, quaerat!"
    },
    {
        id:2,
        title:"Czym jest paradoks Fermiego?",
        author: "Jan Kowak",
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eveniet repellat modi sequi minus sunt facere quam maiores laborum. Dignissimos quisquam vitae ipsa impedit doloribus beatae, iusto libero ratione architecto?'
    },
    {
        id:3,
        title:"Ciemna materia i Ciemna Energia?",
        author: "Jan Dowak",
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eveniet repellat modi sequi minus sunt facere quam maiores laborum. Dignissimos quisquam vitae ipsa impedit doloribus beatae, iusto libero ratione architecto?'
    }

]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    )) 
    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;