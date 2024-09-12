import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const imgBox = style({
  backgroundColor: '#F3F4F5',
  borderRadius: '24px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '.5rem',
});
const imgBoxText = style({
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '.5rem',
  padding: '1rem',
});

const hint = style({
  borderRadius: '24px',
  padding: '1rem',
});

const btnContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'left',
  gap: '1rem',
});

export const appSt = {
  bottomBtn,
  container,
  imgBox,
  imgBoxText,
  hint,
  btnContainer,
};
