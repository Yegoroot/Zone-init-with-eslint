// @mui
import { Container, Typography } from '@mui/material'
// components
import { Logo } from '../../components'
import { useLocales } from '../../hooks'

// ----------------------------------------------------------------------

export default function FooterSimple() {
  const { trans } = useLocales()
  return (
    <Container sx={{ textAlign: 'center', py: 8 }}>
      <Logo isSimple sx={{ mb: 3 }} />
      <Typography variant="body3" sx={{ color: 'text.secondary' }}>
        {trans?.general.copyright}
      </Typography>
    </Container>
  )
}
