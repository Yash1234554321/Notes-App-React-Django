import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "semantic-ui-react";

const AddButton = () => {
  return (
    <div>
      <Link to={"/note/add"}>
        <Icon.Group size="huge" style={{color:"white"}}>
          <Icon name="add circle" />
        </Icon.Group>
      </Link>
    </div>
  );
};

export default AddButton;
