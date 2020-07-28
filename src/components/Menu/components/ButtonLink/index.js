import React from "react";

const ButtonLink = (props) => {
  return (
    <a href={props.href} className={props.className}>
      Novo Vídeo
    </a>
  );
};

export default ButtonLink;
