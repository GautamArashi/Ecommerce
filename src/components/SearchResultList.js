import React from 'react'

const SearchResultList = ({results}) => {
  return (
    <div className="w-full bg-white flex flex-col rounded-10 mt-3 max-h-300 overflow-scroll ">
       {
        results.map((result,id)=>{
            return <SearchResultList results={results} key={id} />
        })
       }
    </div>
  )
}

export default SearchResultList
