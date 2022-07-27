interface InputTitlesProps {
  title: string;
}

const InputTitles = ({ title }: InputTitlesProps) => {
  return (
    <div className="input-title__container">
      <span className="input-title__span">{title}</span>
    </div>
  );
};

export default InputTitles;
