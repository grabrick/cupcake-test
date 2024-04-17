import { FC } from "react";
import Modal from "../../UI/Modal/Modal";
import { IPairValue } from "../../../types/types";

const Home: FC<IPairValue> = ({ pairValue }) => {
  return (
    <>
      <Modal pairValue={pairValue} />
    </>
  )
}

export default Home;