import { PrefDeckItem } from "./DeckRunner";

export default function PrefCard({
  item,
  flipped,
  onFlip,
}: {
  item: PrefDeckItem;
  flipped: boolean;
  onFlip: () => void;
}) {
  return (
    <div className={"card " + (flipped ? "flipped" : "")} onClick={onFlip}>
      <div className="card-face front">
        <div className="frame"></div>
        <div className="label">都道府県</div>
        <div className={"prompt " + (item.pref.length > 4 ? "small" : "")}>
          {item.pref}
        </div>
        <div className="hint">タップして銘柄一覧を見る</div>
      </div>
      <div className="card-face back">
        <div className="frame"></div>
        <div className="stamp">解</div>
        <div className="label">銘柄一覧 ({item.brands.length})</div>
        <div className="answer-list">
          {item.brands.map((b, i) => (
            <div className="chip" key={i}>
              {b}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
