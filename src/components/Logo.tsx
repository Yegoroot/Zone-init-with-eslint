import { memo } from 'react'
// next
import NextLink from 'next/link'
// @mui
import { useTheme } from '@mui/material/styles'
import { Box, BoxProps } from '@mui/material'

// ----------------------------------------------------------------------

interface LogoProps extends BoxProps {
  onDark?: boolean;
  isSimple?: boolean;
}

function Logo({ onDark = false, isSimple = false, sx }: LogoProps) {
  const theme = useTheme()

  const isLight = theme.palette.mode === 'light'

  const PRIMARY_MAIN = theme.palette.primary.main
  const LIGHT_COLOR = theme.palette.common.white
  const DARK_COLOR = theme.palette.grey[800]

  return (
    <NextLink href="/">
      <Box
        sx={{
          width: isSimple ? 64 : 75,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {isSimple ? (
          (
            <Box sx={{ color: onDark ? 'initial' : 'black', width: 300, display: 'flex', gap: 0.2, fontSize: 20 }}>
              Arabic
              <span style={{ background: PRIMARY_MAIN, width: 10, height: 10, borderRadius: '50%' }} />
              best
            </Box>
          )
        ) : (
          <Box sx={{ color: isLight && !onDark ? DARK_COLOR : LIGHT_COLOR, width: 300, display: 'flex', gap: 0.2, fontSize: 20 }}>
            Arabic
            <span style={{ background: PRIMARY_MAIN, width: 10, height: 10, borderRadius: '50%' }} />
            best
          </Box>
        )}
      </Box>
    </NextLink>
  )
}

export default memo(Logo)
