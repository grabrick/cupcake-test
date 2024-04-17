import { FC, useEffect, useState } from "react";
import m from "./ItemPair.module.scss";
import { TPair } from "../../../../types/types";

type TProps = {
  pairValue: TPair;
};

const ItemPair: FC<TProps> = ({ pairValue }) => {
  const [minValue, setMinValue] = useState<number | null>(null);

  useEffect(() => {
    if (pairValue?.values) {
      // Извлекаем все числовые значения из массива объектов
      const values = pairValue.values.map(item => Object.values(item)[0]);
      // Фильтруем, чтобы оставить только положительные значения
      const positiveValues = values.filter(value => value > 0);
      // Находим минимальное значение среди положительных чисел
      const min = positiveValues.length > 0 ? Math.min(...positiveValues) : null;
      setMinValue(min);
    }
  }, [pairValue]);

  return (
    <div className={m.items}>
      <div className={m.nameWrapper}>
        <span className={m.name}>{pairValue?.pairName}</span>
      </div>
      <div className={m.countWrapper}>
        {pairValue?.values?.map((item, index) => {
          const value = Object.values(item)[0];
          return (
            <span key={index} className={value !== minValue ? m.count : m.activeCount}>
              {value.toFixed(2)}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ItemPair;
