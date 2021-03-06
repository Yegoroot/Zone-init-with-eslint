// @mui
import { alpha, styled } from '@mui/material/styles'
import { Popover as MUIPopover, PopoverProps } from '@mui/material'

// ----------------------------------------------------------------------

const ArrowStyle = styled('span')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    top: -7,
    zIndex: 1,
    width: 12,
    right: 20,
    height: 12,
    content: "''",
    position: 'absolute',
    borderRadius: '0 0 4px 0',
    transform: 'rotate(-135deg)',
    background: theme.palette.background.paper,
    borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
    borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
  },
}))

// ----------------------------------------------------------------------

interface Props extends PopoverProps {
  arrow?: boolean;
}

export default function Popover({ children, arrow = false, sx, ...other }: Props) {
  return (
    <MUIPopover
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      PaperProps={{
        sx: {
          mt: 1.5,
          ml: 0.5,
          width: 200,
          overflow: 'inherit',
          ...sx,
        },
      }}
      {...other}
    >
      {arrow && <ArrowStyle />}

      {children}
    </MUIPopover>
  )
}
