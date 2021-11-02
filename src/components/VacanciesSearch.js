import React from 'react';

const VacanciesSearch = ({setSearchValue}) => {

    const onSearchChange = (event) => {
        setSearchValue(event.target.value)        
      }

    return  <section className="vacancies-search">
                <div className="container">
                    <h2>Open vacancies</h2>
                    <div className="search-box">
                        <input className="search" type="search"
                            placeholder="Use keyword: Java, Figma, manager" onChange={onSearchChange}/>
                    </div>
                </div>
            </section>
}

export default VacanciesSearch;