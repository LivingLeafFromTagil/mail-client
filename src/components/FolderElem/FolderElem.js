import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const FolderElem = observer((props) => {
  return(
    <Link style={{textDecoration: 'none', color: 'black'}} to={'/letter/' + props.message.id}>
      <tr key={props.message.id}>
      <td>
        {props.message.author}
      </td>
      <td>
        {props.message.preview}
      </td>
      <td>
        {props.message.date}
      </td>
    </tr>
    </Link>
  )
})

export default FolderElem;