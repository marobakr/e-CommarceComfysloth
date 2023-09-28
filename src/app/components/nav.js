'use client'
import * as React from 'react'
import Link from 'next/link'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import MenuItem from '@mui/material/MenuItem'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Image from 'next/image'
import mylogo from '/public/images/comfysloth.221f6b13.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'

const pages = ['home', 'about', 'products']

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  // const [clickedURL, setClickedURL] = useState('')

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
    // console.log('clicked by')
  }

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null)
    // console.log(event.currentTarget.getAttribute('href'))
  }

  //* main color
  const mainColor = '#102a42'
  const secondre = '#ab7a5f'
  const labels = '#324d67'

  const theme = createTheme({
    palette: {
      primary: {
        main: mainColor,
        alt: secondre,
        title: labels,
      },
    },
  })
  //* style of icnos
  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
    color: 'mainColor',
  }
  //! main style for body
  const mainStyle = {
    fontSize: '16px',
    letterSpacing: '0.1rem',
    textTransform: 'CAPITALIZE',
  }
  return (
    <AppBar
      position='static'
      sx={{
        boxShadow: 'none',
        backgroundColor: 'white',
        color: 'white',
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          sx={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
          }}
        >
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Image src={mylogo} alt='Picture of the author' loading='lazy' />
          </Typography>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href='/'
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
            <Paper>
              <Image
                src={mylogo}
                alt='Picture of the author'
                layout='responsive'
              />
            </Paper>
          </Typography>
          <Box
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            {pages.map((page) => (
              // eslint-disable-next-line react/jsx-key
              <Link href={`/${page}`} s>
                <Button
                  theme={theme}
                  key={page.length}
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontSize: '16px',
                    letterSpacing: '0.1rem',
                    textTransform: 'CAPITALIZE',
                    my: 2,
                    color: labels,
                    display: 'block',
                    padding: '0.5rem',
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          {/* Start Menubar */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', justifyContent: 'flex-end', md: 'none' },
            }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              fontSize='16px'
            >
              <MenuIcon style={{ color: secondre }} />
            </IconButton>
            {/* هنا محتاج اظبط المينيو بتاعت اللينكات */}
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                justifyContent: 'flex-end',
                display: {
                  xs: 'block',
                  md: 'none',
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.length} onClick={handleCloseNavMenu}>
                  <Link href={`/${page}`}>
                    <Typography color={mainColor} textAlign='center'>
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* End Menubars */}
          <Box
            sx={{
              color: mainColor,
              flexGrow: 1,
              justifyContent: 'center',
              gap: '10px',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Typography style={divStyle} className='login'>
              <PersonAddAlt1Icon />
              Login
            </Typography>
            <Typography style={divStyle} className='cart'>
              <ShoppingCartIcon />
              Cart
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
