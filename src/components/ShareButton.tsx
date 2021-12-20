import { useRef, useState } from 'react';
//icon
import shareIcon from '@iconify/icons-carbon/share';
import logoLinkedin from '@iconify/icons-carbon/logo-linkedin';
import logoFacebook from '@iconify/icons-carbon/logo-facebook';
import logoTwitter from '@iconify/icons-carbon/logo-twitter';
import logoInstagram from '@iconify/icons-carbon/logo-instagram';
// @mui
import { SxProps } from '@mui/system';
import { MenuItem, ListItemIcon, ListItemText } from '@mui/material';
// components
import { Popover, Iconify } from './';
import { IconButtonAnimate } from './animate';

// ----------------------------------------------------------------------

type LanguagePopoverProps = {
  sx?: SxProps;
};

export default function ShareButton({ sx }: LanguagePopoverProps) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SOCIALS = [
    {
      name: 'FaceBook',
      icon: logoFacebook,
      socialColor: '#1877F2',
    },
    {
      name: 'Instagram',
      icon: logoInstagram,
      socialColor: '#E02D69',
    },
    {
      name: 'Linkedin',
      icon: logoLinkedin,
      socialColor: '#007EBB',
    },
    {
      name: 'Twitter',
      icon: logoTwitter,
      socialColor: '#00AAEC',
    },
  ];

  return (
    <>
      <IconButtonAnimate
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          ...(open && {
            color: 'primary.main',
          }),
          ...sx,
        }}
      >
        <Iconify icon={shareIcon} sx={{ width: 20, height: 20 }} />
      </IconButtonAnimate>

      <Popover
        arrow
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={anchorRef.current}
        sx={{ width: 220, p: 1 }}
      >
        {SOCIALS.map((option) => (
          <MenuItem key={option.name} onClick={handleClose} sx={{ p: 1.25, borderRadius: 1 }}>
            <ListItemIcon sx={{ mr: 0 }}>
              <Iconify
                icon={option.icon}
                sx={{ width: 24, height: 24, mr: 2, color: option.socialColor }}
              />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ variant: 'body3', noWrap: true }}>
              Share via {option.name}
            </ListItemText>
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
