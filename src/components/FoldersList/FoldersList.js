import React, {useContext, useEffect} from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const FoldersList = observer(() => {
  const {mailConfig} = useContext(Context);
  const storageFolders = localStorage.getItem('mailFolders');

  const fList = mailConfig.Folders.map((fldr, i) => {
    if(i <= 4) 
    {
      return(
        <li onClick={(e) => {
            mailConfig.setIsCustom(false);
            mailConfig.setSelectedFolder(fldr);
          }}>{fldr}
        </li>
      )
    } else {
      return(
        <li onClick={(e) => {
            mailConfig.setIsCustom(true);
            mailConfig.setSelectedFolder(fldr);
          }}>{fldr}
        </li>
      )
    }
  });

  return(
    <ul>
      {fList}
    </ul>
  )
})

export default FoldersList;