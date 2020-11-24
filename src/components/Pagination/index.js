import React from 'react'
import SingleProduct from '../SingleProduct/'
import _ from 'lodash/array'
const Paginator = ({childrenItem,page}) => {
    let childrenListItem = (childrenItem == []) ? [] : _.chunk(childrenItem,9)
    let temp = childrenListItem[page-1]
    return temp ? (
        ( childrenItem == [] && temp == undefined )  ? <></> :
        temp.map(val => {
            return <SingleProduct key={val._id} prod={val}/>
        })
    ) : <></>
}
export default Paginator