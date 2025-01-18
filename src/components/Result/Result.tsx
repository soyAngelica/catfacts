import Image from "next/image";
import dogImage from "@/assets/img/dog.svg";

interface ErrorComponentProps {
  errorMessage: string;
}

const Result = ({ errorMessage }: ErrorComponentProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-slate-300">
          {errorMessage}
        </h2>
      </div>
      <div>
        <Image src={dogImage} alt="Error dog" width={300} />
      </div>
    </div>
  );
};

export default Result;
