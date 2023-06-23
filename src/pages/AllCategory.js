import React from 'react'
import CategoryHeader from "../components/UI/CategoryHeader/CategoryHeader"
import RecentSection from '../components/UI/Recent/RecentSection'
import AllSection from '../components/UI/AllSection/AllSection'

function AllCategory() {
  return (
    <div>
    <CategoryHeader/>
    <RecentSection/>
    <AllSection/>
    </div>
  )
}

export default AllCategory