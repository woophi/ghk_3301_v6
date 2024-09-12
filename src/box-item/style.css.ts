import { style } from '@vanilla-extract/css';

const box = style({
  borderRadius: '1rem',
  backgroundColor: '#F3F4F5',
});
const imgBox = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end',
  height: '160px',
  overflow: 'hidden',
  borderRadius: '1rem',
  flexDirection: 'column',
});

const img = style({
  height: '160px',
  position: 'absolute',
  top: 0,
  left: 0,
  objectFit: 'cover',
  width: '100%',
  objectPosition: 'top',
});

const colorBox = style({
  width: '18px',
  height: '18px',
  border: '1px solid #FFFFFF',
  borderRadius: '9999px',
});

const colors = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  margin: '10px',
  position: 'relative',
  zIndex: 2,
});

const textBox = style({
  display: 'flex',
  alignItems: 'center',
  margin: '1rem',
  justifyContent: 'space-between',
});
const checkbox = style({
  borderRadius: '999px',
});

export const bISt = {
  box,
  imgBox,
  img,
  colorBox,
  colors,
  textBox,
  checkbox,
};
