import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { MenuButton, SocialIcon, StyledContainer } from 'component/styled/styled';
import Link from 'next/link';
import SocialLink from 'component/SocialLink';
import ImageAvatar from 'component/ImageAvatar';

const pages = ['Home', 'About', 'Services', 'Resume', 'Portfolio', 'FAQ', 'Client', 'Contact'];

function TopNav({active}) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" elevation={0} sx={{

      borderBottom: '1px solid #efefef',
    }}>
      <StyledContainer maxWidth="xl" sx={{
        color: 'black'
      }}>
        <Toolbar disableGutters>
          <ImageAvatar />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 1,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              fontSize: 14
            }}
          >
            Ibrahim Abdu
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
            {pages.map((page) => (
              <MenuButton
                key={page}
                variant="text"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block', fontWeight: 600, }}
                className={active == page ? 'active' : ''}
              >
                {page}
              </MenuButton>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <SocialLink color={'#4867aa'} link={"https://www.facebook.com/"}>
              <FacebookIcon />
            </SocialLink>
            <SocialLink color={'#0077b5'} link={"https://www.linkedin.com/in/lbrahim-abdu/"}>
              <LinkedInIcon />
            </SocialLink>

            <SocialLink color={'#171515'} link={"https://www.linkedin.com/in/lbrahim-abdu/"}>
              <GitHubIcon />
            </SocialLink>
          </Box>
        </Toolbar>
      </StyledContainer>
    </AppBar>
  );
}
export default TopNav;