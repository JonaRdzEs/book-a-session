import Button from "./Button";
import Trash from "./icons/Trash";
import { useDispatch } from "../../store/hooks";
import { removeSession } from "../../store/userSessionsSlide";

type ButtonProps = {
  id: string;
};

function DeleteSessionButton({ id }: ButtonProps) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    console.log("Deleting ", id)
    dispatch(removeSession(id));
  };

  return (
    <Button className="text-coral" onClick={handleDelete}>
      <Trash width="30px" height="30px" />
    </Button>
  );
}

export default DeleteSessionButton;
