import classes from "./Modal.module.css";
import BackDrop from "../Backdrop/Backdrop";
import Wrapper from "../../../hoc/Wrapper/wrapper";
import { useEffect, useState } from "react";
const Modal = (props) => {
  const [showModal, setShowModal] = useState(false);
  const cancelShowModal = () => {
    setShowModal(false);
  };
  const setPurchasable = () => {
    props.setPurchasable(false);
  };
  useEffect(() => {
    setShowModal(props.show);
  }, [props.show]);
  return (
    <Wrapper>
      <BackDrop show={showModal} clicked={(cancelShowModal, setPurchasable)} />
      <div
        className={classes.Modal}
        style={{
          transform: showModal ? "translateY(0)" : "translateY(-100vh)",
          opacity: showModal ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Wrapper>
  );
};

export default Modal;
