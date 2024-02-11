type ImageButtonProps = {
  image: string;
  onClick: () => void;
};

export default function ImageButton({ image, onClick }: ImageButtonProps) {
  return (
    <button onClick={onClick} className="imageButton">
      <img
        style={{ width: "50px", height: "50px"}}
        src={image}
        alt="Clickable button"
      />
    </button>
  );
}
