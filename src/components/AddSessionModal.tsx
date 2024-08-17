import { useState, forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Input from "./common/Input";
import Title from "./common/Title";
import Button from "./common/Button";
import { FormEvent } from "react";
import Cross from "./common/icons/Cross";
import { useDispatch } from "../store/hooks";
import { addSession } from "../store/userSessionsSlide";
import { ModalHandleProps } from "../types";
import toast from "react-hot-toast";
import Alert from "./common/Alert";

type AddSessionModalProps = {
  sessionId: string
}

const AddSessionModal = forwardRef<ModalHandleProps, AddSessionModalProps>(
  function AddSessionModal({ sessionId }, ref) {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isOpen, setOpen] = useState<boolean>(false);
    const dispatch = useDispatch();

    const open = () => setOpen(true);
    const close = () => setOpen(false);

    useImperativeHandle(ref, () => ({
      open,
      close,
    }))
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const name = form.get("name") as string;
      const email = form.get("email") as string;
   
      if(!name.trim() || !email.trim()) return;
      try {
        dispatch(addSession({
          name,
          email,
          sessionId,
        }));
        toast.custom((t) => <Alert variant="success" t={t}>Registration completed</Alert> )
        close();
      } catch (error) {
        if(error instanceof Error) {
          toast.custom((t) => <Alert variant="error" t={t}>{error.message}</Alert> )
        } 
      }
    };

    if(!isOpen) return;
  
    return createPortal(
      <div ref={modalRef} className="h-full w-full fixed bottom-0 top-0 right-0 left-0 flex justify-center items-center z-10 bg-[#0000007d]">
        <div role="dialog" aria-labelledby="title" className="bg-light-gray w-full max-w-2xl px-4 mx-4 rounded-sm relative lg:px-6 lg:m-auto py-10">
          <Button aria-label="close" onClick={close} className="absolute right-4 top-6">
            <Cross />
          </Button>
          <Title className="text-xl font-bold text-center sm:text-left lg:text-2xl">Register for this session</Title>
          <p className="text-center sm:text-left mb-4 lg:text-lg">Secure your spot in this session by filling out the registration form.</p>
          <form className="w-full flex justify-start items-start flex-col gap-4" onSubmit={handleSubmit}>
            <Input required id="name" label="Name:" className="w-full h-10 px-2 rounded-sm" name="name" placeholder="Your name"/>
            <Input required id="email" label="Email:" type="email" name="email" className="w-full h-10 px-2 rounded-sm" placeholder="user@example.com" />
            <Button className="bg-navy-blue text-white w-full max-w-36 h-12 rounded-sm self-center">Register</Button>
          </form>
        </div>
      </div>
      ,
      document.getElementById("modal")!
    );
  }
);

export default AddSessionModal;
