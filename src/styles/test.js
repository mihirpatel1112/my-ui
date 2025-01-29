// src/styles/ButtonStyles.js
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const test = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  padding: '10px 20px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));