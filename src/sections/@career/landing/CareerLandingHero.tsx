import { styled } from '@mui/material/styles'
import { Typography, Stack, Container, Box, Grid, Button } from '@mui/material'

import cssStyles from '../../../utils/cssStyles'
import { CareerHeroIllustration } from '../../../assets'
import { useLocales } from '../../../hooks'
import Routes from '../../../routes'

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  ...cssStyles(theme).bgImage(),
  overflow: 'hidden',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: theme.spacing(15),
  },
}))

// ----------------------------------------------------------------------

export default function CareerLandingHero() {
  const { trans } = useLocales()

  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} md={6} lg={5}>
            <Stack
              spacing={5}
              sx={{
                textAlign: { xs: 'center', md: 'unset' },
              }}
            >
              <Stack spacing={3}>
                <Typography variant="h1" sx={{ color: 'common.white' }}>
                  {trans?.home_hero.learn}
                  {' '}
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    {trans?.home_hero.light}
                  </Box>
                  {' '}
                  {trans?.home_hero.arabic}
                </Typography>
                <Typography sx={{ color: 'grey.500' }}>
                  {trans?.home_hero.description}
                </Typography>
              </Stack>

              <Stack
                spacing={2} sx={{ flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'start',
                  alignItems: { xs: 'initial', md: 'end' },
                  gap: 2 }}
              >
                <Button variant="outlined" target="_blank" href={Routes.grammar}>{trans?.menu.grammar}</Button>
                <Button variant="outlined" target="_blank" href={Routes.practice}>{trans?.menu.practice}</Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} lg={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <CareerHeroIllustration />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  )
}
