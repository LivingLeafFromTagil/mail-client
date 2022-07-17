import '../../App.css'
import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import FolderElem from '../FolderElem/FolderElem';

const Draft = observer((props) => {
  const {mailConfig} = useContext(Context);
  const messages = mailConfig.Draft.map((msg) => {
    return(
      <FolderElem key={msg.id} message={msg}/>
    )
  });
  return (
        <table>
          {messages}
        </table>
  )
})

export default Draft;