import { useRef, useState } from 'react'
// icon
import contentDeliveryNetwork from '@iconify/icons-carbon/content-delivery-network'
// @mui
import { SxProps } from '@mui/system'
import { Box, List, ListItemIcon, MenuItem, ListItemText } from '@mui/material'
// hooks
import { useLocales } from '../hooks'
// components
import { Popover, Iconify } from '../components'
import { IconButtonAnimate } from '../components/animate'

// ----------------------------------------------------------------------

type LanguagePopoverProps = {
  sx?: SxProps;
};

export default function LanguagePopover({ sx }: LanguagePopoverProps) {
  const anchorRef = useRef(null)
  const [open, setOpen] = useState(false)
  // const { onChangeLanguage } = useLocales();
  const { allLang, currentLang } = useLocales()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <IconButtonAnimate ref={anchorRef} color="inherit" onClick={handleOpen} sx={sx}>
        <Iconify icon={contentDeliveryNetwork} sx={{ width: 20, height: 20 }} />
      </IconButtonAnimate>

      <Popover
        arrow
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <List>
          {allLang.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === currentLang}
              onClick={() => {
                handleClose()
                // onChangeLanguage(option.value);
              }}
            >
              <ListItemIcon>
                <Box
                  component="img"
                  alt={option.label}
                  src={option.icon}
                  sx={{ borderRadius: '50%', width: 28, height: 28, objectFit: 'cover' }}
                />
              </ListItemIcon>

              <ListItemText primaryTypographyProps={{ variant: 'body2', noWrap: true }}>
                {option.label}
              </ListItemText>
            </MenuItem>
          ))}
        </List>
      </Popover>
    </>
  )
}
