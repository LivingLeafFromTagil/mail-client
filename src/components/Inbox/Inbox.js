import '../../App.css';
import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import FolderElem from '../FolderElem/FolderElem';

const Inbox = observer((props) => {
  const {mailConfig} = useContext(Context);
  const messages = mailConfig.Inbox.map((msg) => {
    return(
      <FolderElem key={msg.id} message={msg}/>
    )
  });
  console.log(messages);
  
  return (
        <table>
          {messages}
        </table>
  )
})

export default Inbox;