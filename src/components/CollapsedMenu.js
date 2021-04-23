import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';

const options = [
  ['Home', '#home'],
  ['Habilidades', '#skills'],
  ['Projetos', '#projects'],
];

const ITEM_HEIGHT = 48;
export default function CollapsedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="nav-bar-btns-coll">
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={handleClose}>
            <Button href={option[1]} color="inherit">{option[0]}</Button>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
