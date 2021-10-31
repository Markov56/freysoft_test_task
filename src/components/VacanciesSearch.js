import React, {useState} from 'react';

const VacanciesSearch = ({setSearchValue}) => {

    const onSearchChange = (event) => {
        setSearchValue(event.target.value)        
      }

    return  <section className="vacancies-search">
                <h2>Open vacancies</h2>
                <div className="search-box">
                    <input className="search" type="search"
                        placeholder="Use keyword: Java, Figma, manager" onChange={onSearchChange}/>
                </div>
            </section>
}

export default VacanciesSearch;