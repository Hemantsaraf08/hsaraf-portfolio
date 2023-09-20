import React from "react";

function Container({id, children}: {id?: string;children: any}) {
  return <section id={id} className="container">{children}</section>;
}

export default Container;
