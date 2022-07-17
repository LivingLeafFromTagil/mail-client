import React, { useContext } from "react";
import Inbox from "../Inbox/Inbox";
import Deleted from "../Deleted/Deleted";
import Draft from "../Draft/Draft";
import Sent from "../Sent/Sent";
import Spam from "../Spam/Spam";
import Custom from "../Custom/Custom";
import {observer} from "mobx-react-lite"
import { Context } from "../..";

const CurrentFolder = observer((props) => {
  const {mailConfig} = useContext(Context);
  return(
    <div className="app-main-letters">
      <div><h1>{mailConfig.SelectedFolder}</h1></div>
      {mailConfig.SelectedFolder === 'Inbox' && (
        <Inbox />
      )}
      {mailConfig.SelectedFolder === 'Sent' && (
        <Sent />
      )}
      {mailConfig.SelectedFolder === 'Draft' && (
        <Draft />
      )}
      {mailConfig.SelectedFolder === 'Deleted' && (
        <Deleted />
      )}
      {mailConfig.SelectedFolder === 'Spam' && (
        <Spam />
      )}
      {mailConfig.SelectedFolder !== 'Inbox' &&
        mailConfig.SelectedFolder !== 'Sent' &&
        mailConfig.SelectedFolder !== 'Draft' &&
        mailConfig.SelectedFolder !== 'Deleted' &&
        mailConfig.SelectedFolder !== 'Spam' &&
      (
        <Custom />
      )}
    </div> 
  )
})

export default CurrentFolder