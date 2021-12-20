import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Menu(theme: Theme) {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...theme.typography.body2,
          margin: theme.spacing(1, 0),
          padding: theme.spacing(1.25),
          borderRadius: theme.shape.borderRadius,
          '&.Mui-selected': {
            backgroundColor: theme.palette.action.selected,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          },
          '& .MuiListItemIcon-root': {
            minWidth: 'unset',
          },
        },
      },
    },
  };
}
