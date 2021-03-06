// @mui
import { Stack, Select, MenuItem, Typography, FormControl, SelectChangeEvent } from '@mui/material'

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'popular', label: 'Popular' },
]

type Props = {
  sort: string;
  onChangeSort: (event: SelectChangeEvent) => void;
};

export default function ReviewElearningToolbar({ sort, onChangeSort }: Props) {
  return (
    <Stack spacing={5} alignItems="center" direction="row" sx={{ mb: 5 }}>
      <Typography variant="h4" sx={{ width: 1 }}>
        Reviews
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center" flexShrink={0}>
        <FormControl
          variant="filled"
          sx={{
            minWidth: 160,
            '& .MuiFilledInput-input': { py: '11px' },
          }}
        >
          <Select value={sort} onChange={onChangeSort}>
            {SORT_OPTIONS.map((option) => (
              <MenuItem key={option.value} value={option.value} sx={{ width: 200, pl: 2 }}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  )
}
