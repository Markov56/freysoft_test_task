import React from 'react';
import Card from './Card.jsx'

const technologyVacancies = [
    {vac: "Java Engineer on Fintech Project", city: "Kyiv", remote: false, category: "technology", id: 1},
    {vac: " Senior .NET Engineer for FinTech Project", city: "Kyiv", remote: true, category: "technology", id: 2},
    {vac: "Senior DevOps Engineer ", city: "Kyiv", remote: false, category: "technology", id: 3},
    {vac: "React Native on FinTech Project", city: "Kyiv", remote: true, category: "technology", id: 4},
]

const Vacancies = ({searchValue}) => {

    return (
        <section className="vacancies">
            <div className="container">
                <h3 className="">{ searchValue ? `Search for: ${searchValue}` : 'Technology'}</h3>
                <div className="cards-box">
                    { technologyVacancies
                        .filter(item => item.vac.toLowerCase().includes(searchValue.toLowerCase()))
                        .map(item => {
                    return <Card 
                                vac={item.vac} 
                                city={item.city} 
                                remote={item.remote} 
                                category={item.category} 
                                key={item.id} 
                                id={item.id}                            
                                />
                    })}
                </div>
                <h3>Operations</h3>
            </div>
        </section>
    )
}

export default Vacancies;