import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddLocation from '@material-ui/icons/AddLocation';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ScheduleIcon from '@material-ui/icons/Schedule';


export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" onClick={() => window.location.href = '/dashboard'} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddLocation />  
      </ListItemIcon>
      <ListItemText primary="Cadastrar Unidade" onClick={() => window.location.href = '/registrarunidade'}/>  
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ScheduleIcon />
      </ListItemIcon>
      <ListItemText primary="Agendar Vacina" onClick={() => window.location.href = '/checkout'}/>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Sair" onClick={() => window.location.href = '/'}/>
    </ListItem>
  </div>
);