import React from "react";

export default function pageTitle(props) {
  return (
    <div>
      <h2 className= "page__title text-center">{ props.title }</h2>
    </div>
  )
}
