import Button from "./Button";
import SquareRoundedArrowRight from "./icons/SquareRoundedArrowRight";

type ButtonProps = {
  id: string;
};

function SeeSessionButton({ id }: ButtonProps) {

  return (
    <Button className="text-[#3A4E75]" to={`/sessions/${id}`}>
      <SquareRoundedArrowRight width="30px" height="30px" />
    </Button>
  );
}

export default SeeSessionButton;
