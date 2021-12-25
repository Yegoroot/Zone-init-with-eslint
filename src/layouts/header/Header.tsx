// @mui
import { useTheme } from '@mui/material/styles'
import { Box, Stack, Button, AppBar, Divider, Container } from '@mui/material'
// hooks
import { useOffSetTop, useResponsive } from '../../hooks'
// routes
import Routes from '../../routes'
// config
import { HEADER_DESKTOP_HEIGHT } from '../../config'
//
import Searchbar from '../Searchbar'
import LanguagePopover from '../LanguagePopover'
import { NavMobile, NavDesktop, navConfig } from '../nav'
import { ToolbarStyle, ToolbarShadowStyle } from './HeaderToolbarStyle'

// ----------------------------------------------------------------------

type Props = {
  transparent?: boolean;
};

export default function Header({ transparent }: Props) {
  const theme = useTheme()

  const isDesktop = useResponsive('up', 'md')

  const isLight = theme.palette.mode === 'light'

  const isScrolling = useOffSetTop(HEADER_DESKTOP_HEIGHT)

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle disableGutters transparent={transparent} scrolling={isScrolling}>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >

          {isDesktop && (
            <NavDesktop
              isScrolling={isScrolling}
              isTransparent={transparent}
              navConfig={navConfig}
            />
          )}

          <Box sx={{ flexGrow: 1 }} />

          <Stack spacing={2} direction="row" alignItems="center">
            <Searchbar
              sx={{
                ...(isScrolling && { color: 'text.primary' }),
              }}
            />

            <LanguagePopover
              sx={{
                ...(isScrolling && { color: 'text.primary' }),
              }}
            />

            <Divider orientation="vertical" sx={{ height: 24 }} />

            {isDesktop && (
              <Stack direction="row" spacing={1}>

                <Button variant="contained" href={Routes.buyNow} target="_blank" rel="noopener">
                  Сотрудничество
                </Button>
              </Stack>
            )}
          </Stack>

          {!isDesktop && (
            <NavMobile
              navConfig={navConfig}
              sx={{
                ml: 1,
                ...(isScrolling && { color: 'text.primary' }),
              }}
            />
          )}
        </Container>
      </ToolbarStyle>

      {isScrolling && <ToolbarShadowStyle />}
    </AppBar>
  )
}
