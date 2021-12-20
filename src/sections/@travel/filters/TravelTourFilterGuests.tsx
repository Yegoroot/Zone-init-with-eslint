import { useRef, useState, Dispatch, SetStateAction } from 'react';
// icons
import eventsIcon from '@iconify/icons-carbon/events';
import addAlt from '@iconify/icons-carbon/add-alt';
import subtractAlt from '@iconify/icons-carbon/subtract-alt';
// @mui
import { SxProps } from '@mui/system';
import { Box, Stack, Divider, Typography, InputAdornment } from '@mui/material';
// components
import { Popover, Iconify } from '../../../components';
import { IconButtonAnimate } from '../../../components/animate';

//
import { InputStyle } from './TravelTourBarFilters';

// ----------------------------------------------------------------------

type Props = {
  sx?: SxProps;
  guests: {
    adults: number;
    children: number;
  };
  setGuests: Dispatch<
    SetStateAction<{
      adults: number;
      children: number;
    }>
  >;
};

export default function TravelTourFilterGuests({ guests, setGuests, sx }: Props) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const totalGuests = guests.children + guests.adults;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleIncrementGuests = (guest?: string) => {
    if (guest === 'children') {
      setGuests({
        ...guests,
        children: guests.children + 1,
      });
    } else {
      setGuests({
        ...guests,
        adults: guests.adults + 1,
      });
    }
  };

  const handleDecreaseGuests = (guest?: string) => {
    if (guest === 'children') {
      setGuests({
        ...guests,
        children: guests.children - 1,
      });
    } else {
      setGuests({
        ...guests,
        adults: guests.adults - 1,
      });
    }
  };

  return (
    <>
      <Box ref={anchorRef} onClick={handleOpen} sx={{ width: 1, ...sx }}>
        <InputStyle
          value={totalGuests > 0 ? `${totalGuests} Guests` : ''}
          variant="filled"
          placeholder="Guests"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  icon={eventsIcon}
                  sx={{ width: 24, height: 24, mr: 1, color: 'text.disabled' }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={anchorRef.current}
        anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
        transformOrigin={{ vertical: 'center', horizontal: 'center' }}
        sx={{ width: 1, maxWidth: 360, p: 3 }}
      >
        <Stack spacing={2.5} divider={<Divider sx={{ borderStyle: 'dashed' }} />}>
          <Input
            title="Adults"
            caption="Ages 13 or above"
            total={guests.adults}
            onDecrease={handleDecreaseGuests}
            onIncrement={handleIncrementGuests}
          />

          <Input
            title="Children"
            caption="Ages 2 - 12"
            total={guests.children}
            onDecrease={() => handleDecreaseGuests('children')}
            onIncrement={() => handleIncrementGuests('children')}
          />
        </Stack>
      </Popover>
    </>
  );
}

// ----------------------------------------------------------------------

type RowProps = {
  title: string;
  caption: string;
  total: number;
  onDecrease: VoidFunction;
  onIncrement: VoidFunction;
};

function Input({ title, caption, total, onDecrease, onIncrement }: RowProps) {
  return (
    <Stack direction="row">
      <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {caption}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: 100, typography: 'subtitle1' }}
      >
        <IconButtonAnimate
          disabled={total < 1}
          onClick={onDecrease}
          sx={{ p: 0, '&.Mui-disabled': { opacity: 0.72 } }}
        >
          <Iconify icon={subtractAlt} />
        </IconButtonAnimate>
        {total}
        <IconButtonAnimate onClick={onIncrement} sx={{ p: 0 }}>
          <Iconify icon={addAlt} />
        </IconButtonAnimate>
      </Stack>
    </Stack>
  );
}
