import { Checkbox } from '@alfalab/core-components/checkbox';
import { Typography } from '@alfalab/core-components/typography';
import { bISt } from './style.css';

type Props = {
  price: number;
  title: string;
  checked: boolean;
  onClick: () => void;
  img: string;
  imgBg: string;
  colors: string[];
};

export const BoxItem = ({ checked, colors, img, imgBg, onClick, price, title }: Props) => {
  return (
    <div className={bISt.box} onClick={onClick}>
      <div className={bISt.imgBox} style={{ backgroundColor: imgBg }}>
        <img src={img} className={bISt.img} />
        {colors.length ? (
          <div className={bISt.colors}>
            <Typography.Text view="primary-medium">Цвета</Typography.Text>
            {colors.map(c => (
              <div key={c} style={{ backgroundColor: c }} className={bISt.colorBox} />
            ))}
          </div>
        ) : null}
      </div>

      <div className={bISt.textBox}>
        <div>
          <Typography.TitleResponsive tag="h2" view="small" font="system" weight="semibold">
            {title}
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="secondary">
            {price.toLocaleString('ru')} ₽
          </Typography.Text>
        </div>
        <Checkbox checked={checked} size={24} boxClassName={bISt.checkbox} />
      </div>
    </div>
  );
};
