import { SakeItem } from "./page";

export default function BrandCard({
  item,
  flipped,
  onFlip,
}: {
  item: SakeItem;
  flipped: boolean;
  onFlip: () => void;
}) {
  return (
    <div className={"card " + (flipped ? "flipped" : "")} onClick={onFlip}>
      <div className="card-face front">
        <div className="frame"></div>
        <div className="label">銘柄</div>
        <div className="prompt">{item.brand}</div>
        <div className="hint">タップして答えを見る</div>
      </div>
      <div className="card-face back">
        <div className="frame"></div>
        <div className="stamp">解</div>
        <div className="label">答え</div>
        <div className="answer-block">
          <div className="answer-line">{item.pref}</div>
          <div className="answer-sub">{item.brewery}</div>
        </div>
      </div>
    </div>
  );
}
