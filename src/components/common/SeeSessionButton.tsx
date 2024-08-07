import Button from "./Button";
import SquareRoundedArrowRight from "./icons/SquareRoundedArrowRight";

type ButtonProps = {
  id: string;
};

function SeeSessionButton({ id }: ButtonProps) {

  return (
    <Button className="text-navy-blue" to={`/sessions/${id}`}>
      <SquareRoundedArrowRight width="35px" height="35px" />
    </Button>
  );
}

export default SeeSessionButton;
