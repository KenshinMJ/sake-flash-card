type DotsProps = {
  total: number;
  current: number;
};

export default function Dots({ total, current }: DotsProps) {
  return (
    <div className="dots">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={
            "dot " + (i < current ? "done" : i === current ? "current" : "")
          }
        />
      ))}
    </div>
  );
}
