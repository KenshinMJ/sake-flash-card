"use client";

import { useMemo, useState } from "react";
import { Mode, SAKE_DATA, SakeItem } from "./page";
import BrandCard from "./BrandCard";
import Dots from "./Dots";
import PrefCard from "./PrefCard";

export type BrandDeckItem = SakeItem & { id: string };
export type PrefDeckItem = { id: string; pref: string; brands: string[] };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildBrandDeck(data: typeof SAKE_DATA): BrandDeckItem[] {
  return shuffle(data.map((d, i) => ({ id: "b" + i, ...d })));
}

function buildPrefDeck(data: typeof SAKE_DATA): PrefDeckItem[] {
  const map: { [key: string]: string[] } = {};
  data.forEach((d) => {
    if (!map[d.pref]) map[d.pref] = [];
    map[d.pref].push(d.brand);
  });
  return shuffle(
    Object.entries(map).map(([pref, brands], i) => ({
      id: "p" + i,
      pref,
      brands,
    })),
  );
}

export default function DeckRunner({
  mode,
  data,
  onExit,
}: {
  mode: Mode;
  data: typeof SAKE_DATA;
  onExit: (replay: boolean) => void;
}) {
  const deck = useMemo(
    () => (mode === "brand" ? buildBrandDeck(data) : buildPrefDeck(data)),
    [mode, data],
  );
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const finished = index >= deck.length;

  function next() {
    setFlipped(false);
    setTimeout(() => setIndex((i) => i + 1), 120);
  }

  function restart() {
    setIndex(0);
    setFlipped(false);
    onExit(true);
  }

  if (finished) {
    return (
      <div className="done-screen">
        <h2>{deck.length}枚、読了</h2>
        <p>もう一周するか、モードを変えて挑戦しましょう。</p>
        <div className="controls">
          <button className="action ghost" onClick={() => onExit(false)}>
            モード選択に戻る
          </button>
          <button className="action" onClick={restart}>
            もう一度
          </button>
        </div>
      </div>
    );
  }

  const item = deck[index];

  return (
    <div>
      <div className="progress flex-col">
        <div>
          {index + 1} / {deck.length}
        </div>
        <Dots total={deck.length} current={index} />
      </div>
      <div className="stage">
        {mode === "brand" ? (
          <BrandCard
            item={item as SakeItem}
            flipped={flipped}
            onFlip={() => setFlipped((f) => !f)}
          />
        ) : (
          <PrefCard
            item={item as PrefDeckItem}
            flipped={flipped}
            onFlip={() => setFlipped((f) => !f)}
          />
        )}
      </div>
      <div className="controls">
        <button className="action ghost" onClick={() => setFlipped((f) => !f)}>
          {flipped ? "表に戻す" : "答えを見る"}
        </button>
        <button className="action" onClick={next}>
          次のカード
        </button>
      </div>
      <div className="tip">カードをタップしても裏返せます</div>
    </div>
  );
}
