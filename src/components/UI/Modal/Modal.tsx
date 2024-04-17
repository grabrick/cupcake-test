import { FC } from "react";
import Alert from "../Alert/Alert";
import ItemPair from "./ItemPair/ItemPair";
import m from "./Modal.module.scss";
import { IPairValue } from "../../../types/types";

const Modal: FC<IPairValue> = ({ pairValue }) => {
  return (
    <section className={m.container}>
      <div className={m.header}>
        <h3 className={m.headerTitle}>Pair name/market</h3>
        <div className={m.numbers}>
          <h3 className={m.headerTitle}>First</h3>
          <h3 className={m.headerTitle}>Second</h3>
          <h3 className={m.headerTitle}>Third</h3>
        </div>
      </div>
      <div className={m.content}>
        {pairValue?.length !== 0 ? (
          <>
            {pairValue?.map((items, i) => (
              <ItemPair key={i} pairValue={items} />
            ))}
          </>
        ) : (
          <Alert text={"В данный момент отсутствует информация"} />
        )}
      </div>
    </section>
  );
};

export default Modal;
