import React from 'react'

export default function SelectOptions({placeholder}) {
  return (
    <select name="10 items per page" id="cars" className="font-body mt-10 border border-neutral-500 text-neutral-800">
    <option value="volvo" className="font-body">{placeholder}</option>
    <option value="saab">10 items per page</option>
    <option value="opel">15 items per page</option>
    <option value="audi">20 items per page</option>
  </select>
  )
}
