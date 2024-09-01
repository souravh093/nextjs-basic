import React from 'react'

const DynamicPage = ({params, searchParams}) => {
    console.log(params)
    console.log(searchParams)
  return (
    <div>DynamicPage {params.productId}</div>
  )
}

export default DynamicPage