"use client";

// import nextConfig from "@/next.config";
import dynamic from "next/dynamic";
import { useState } from "react";
// const BASE_PATH = nextConfig.basePath || "";

const ClientDeckRunner = dynamic(() => import("./DeckRunner"), {
  ssr: false,
});

export const SAKE_DATA = [
  {
    brand: "獺祭",
    pref: "山口県",
    brewery: "旭酒造",
  },
  {
    brand: "十四代",
    pref: "山形県",
    brewery: "高木酒造",
  },
  {
    brand: "新政",
    pref: "秋田県",
    brewery: "新政酒造",
  },
  {
    brand: "飛露喜",
    pref: "福島県",
    brewery: "廣木酒造本店",
  },
  {
    brand: "而今",
    pref: "三重県",
    brewery: "木屋正酒造",
  },
  {
    brand: "田酒",
    pref: "青森県",
    brewery: "西田酒造店",
  },
  {
    brand: "黒龍",
    pref: "福井県",
    brewery: "黒龍酒造",
  },
  {
    brand: "久保田",
    pref: "新潟県",
    brewery: "朝日酒造",
  },
  {
    brand: "八海山",
    pref: "新潟県",
    brewery: "八海醸造",
  },
  {
    brand: "越乃寒梅",
    pref: "新潟県",
    brewery: "石本酒造",
  },
  {
    brand: "〆張鶴",
    pref: "新潟県",
    brewery: "宮尾酒造",
  },
  {
    brand: "菊姫",
    pref: "石川県",
    brewery: "菊姫合資会社",
  },
  {
    brand: "天狗舞",
    pref: "石川県",
    brewery: "車多酒造",
  },
  {
    brand: "手取川",
    pref: "石川県",
    brewery: "吉田酒造店",
  },
  {
    brand: "加賀鳶",
    pref: "石川県",
    brewery: "福光屋",
  },
  {
    brand: "梵",
    pref: "福井県",
    brewery: "加藤吉平商店",
  },
  {
    brand: "梵・艶",
    pref: "福井県",
    brewery: "加藤吉平商店",
  },
  {
    brand: "作",
    pref: "三重県",
    brewery: "清水清三郎商店",
  },
  {
    brand: "瀧自慢",
    pref: "三重県",
    brewery: "瀧自慢酒造",
  },
  {
    brand: "酒屋八兵衛",
    pref: "三重県",
    brewery: "元坂酒造",
  },
  {
    brand: "磯自慢",
    pref: "静岡県",
    brewery: "磯自慢酒造",
  },
  {
    brand: "開運",
    pref: "静岡県",
    brewery: "土井酒造場",
  },
  {
    brand: "初亀",
    pref: "静岡県",
    brewery: "初亀醸造",
  },
  {
    brand: "喜久醉",
    pref: "静岡県",
    brewery: "青島酒造",
  },
  {
    brand: "蓬莱泉",
    pref: "愛知県",
    brewery: "関谷醸造",
  },
  {
    brand: "義侠",
    pref: "愛知県",
    brewery: "山忠本家酒造",
  },
  {
    brand: "醸し人九平次",
    pref: "愛知県",
    brewery: "萬乗醸造",
  },
  {
    brand: "白老",
    pref: "愛知県",
    brewery: "澤田酒造",
  },
  {
    brand: "松の司",
    pref: "滋賀県",
    brewery: "松瀬酒造",
  },
  {
    brand: "七本鎗",
    pref: "滋賀県",
    brewery: "冨田酒造",
  },
  {
    brand: "不老泉",
    pref: "滋賀県",
    brewery: "上原酒造",
  },
  {
    brand: "玉川",
    pref: "京都府",
    brewery: "木下酒造",
  },
  {
    brand: "澤屋まつもと",
    pref: "京都府",
    brewery: "松本酒造",
  },
  {
    brand: "月の桂",
    pref: "京都府",
    brewery: "増田徳兵衛商店",
  },
  {
    brand: "英勲",
    pref: "京都府",
    brewery: "齊藤酒造",
  },
  {
    brand: "秋鹿",
    pref: "大阪府",
    brewery: "秋鹿酒造",
  },
  {
    brand: "呉春",
    pref: "大阪府",
    brewery: "呉春",
  },
  {
    brand: "龍力",
    pref: "兵庫県",
    brewery: "本田商店",
  },
  {
    brand: "播州一献",
    pref: "兵庫県",
    brewery: "山陽盃酒造",
  },
  {
    brand: "剣菱",
    pref: "兵庫県",
    brewery: "剣菱酒造",
  },
  {
    brand: "白鶴",
    pref: "兵庫県",
    brewery: "白鶴酒造",
  },
  {
    brand: "菊正宗",
    pref: "兵庫県",
    brewery: "菊正宗酒造",
  },
  {
    brand: "福寿",
    pref: "兵庫県",
    brewery: "神戸酒心館",
  },
  {
    brand: "来楽",
    pref: "兵庫県",
    brewery: "茨木酒造",
  },
  {
    brand: "風の森",
    pref: "奈良県",
    brewery: "油長酒造",
  },
  {
    brand: "みむろ杉",
    pref: "奈良県",
    brewery: "今西酒造",
  },
  {
    brand: "春鹿",
    pref: "奈良県",
    brewery: "今西清兵衛商店",
  },
  {
    brand: "篠峯",
    pref: "奈良県",
    brewery: "千代酒造",
  },
  {
    brand: "紀土",
    pref: "和歌山県",
    brewery: "平和酒造",
  },
  {
    brand: "車坂",
    pref: "和歌山県",
    brewery: "吉村秀雄商店",
  },
  {
    brand: "梅乃宿",
    pref: "奈良県",
    brewery: "梅乃宿酒造",
  },
  {
    brand: "出雲富士",
    pref: "島根県",
    brewery: "富士酒造",
  },
  {
    brand: "王祿",
    pref: "島根県",
    brewery: "王祿酒造",
  },
  {
    brand: "李白",
    pref: "島根県",
    brewery: "李白酒造",
  },
  {
    brand: "月山",
    pref: "島根県",
    brewery: "吉田酒造",
  },
  {
    brand: "賀茂金秀",
    pref: "広島県",
    brewery: "金光酒造",
  },
  {
    brand: "雨後の月",
    pref: "広島県",
    brewery: "相原酒造",
  },
  {
    brand: "賀茂鶴",
    pref: "広島県",
    brewery: "賀茂鶴酒造",
  },
  {
    brand: "富久長",
    pref: "広島県",
    brewery: "今田酒造本店",
  },
  {
    brand: "宝剣",
    pref: "広島県",
    brewery: "宝剣酒造",
  },
  {
    brand: "獺祭磨き二割三分",
    pref: "山口県",
    brewery: "旭酒造",
  },
  {
    brand: "東洋美人",
    pref: "山口県",
    brewery: "澄川酒造場",
  },
  {
    brand: "雁木",
    pref: "山口県",
    brewery: "八百新酒造",
  },
  {
    brand: "五橋",
    pref: "山口県",
    brewery: "酒井酒造",
  },
  {
    brand: "貴",
    pref: "山口県",
    brewery: "永山本家酒造場",
  },
  {
    brand: "旭若松",
    pref: "徳島県",
    brewery: "那賀酒造",
  },
  {
    brand: "芳水",
    pref: "徳島県",
    brewery: "芳水酒造",
  },
  {
    brand: "悦凱陣",
    pref: "香川県",
    brewery: "丸尾本店",
  },
  {
    brand: "川鶴",
    pref: "香川県",
    brewery: "川鶴酒造",
  },
  {
    brand: "石鎚",
    pref: "愛媛県",
    brewery: "石鎚酒造",
  },
  {
    brand: "梅錦",
    pref: "愛媛県",
    brewery: "梅錦山川",
  },
  {
    brand: "司牡丹",
    pref: "高知県",
    brewery: "司牡丹酒造",
  },
  {
    brand: "酔鯨",
    pref: "高知県",
    brewery: "酔鯨酒造",
  },
  {
    brand: "南",
    pref: "高知県",
    brewery: "南酒造場",
  },
  {
    brand: "土佐しらぎく",
    pref: "高知県",
    brewery: "仙頭酒造場",
  },
  {
    brand: "亀泉",
    pref: "高知県",
    brewery: "亀泉酒造",
  },
  {
    brand: "庭のうぐいす",
    pref: "福岡県",
    brewery: "山口酒造場",
  },
  {
    brand: "田中六五",
    pref: "福岡県",
    brewery: "白糸酒造",
  },
  {
    brand: "繁桝",
    pref: "福岡県",
    brewery: "高橋商店",
  },
  {
    brand: "美田",
    pref: "福岡県",
    brewery: "みいの寿",
  },
  {
    brand: "鍋島",
    pref: "佐賀県",
    brewery: "富久千代酒造",
  },
  {
    brand: "東一",
    pref: "佐賀県",
    brewery: "五町田酒造",
  },
  {
    brand: "七田",
    pref: "佐賀県",
    brewery: "天山酒造",
  },
  {
    brand: "能古見",
    pref: "佐賀県",
    brewery: "馬場酒造場",
  },
  {
    brand: "六十餘洲",
    pref: "長崎県",
    brewery: "今里酒造",
  },
  {
    brand: "福田",
    pref: "長崎県",
    brewery: "福田酒造",
  },
  {
    brand: "花の香",
    pref: "熊本県",
    brewery: "花の香酒造",
  },
  {
    brand: "香露",
    pref: "熊本県",
    brewery: "熊本県酒造研究所",
  },
  {
    brand: "れいざん",
    pref: "熊本県",
    brewery: "山村酒造",
  },
  {
    brand: "千代の園",
    pref: "熊本県",
    brewery: "千代の園酒造",
  },
  {
    brand: "西の関",
    pref: "大分県",
    brewery: "萱島酒類",
  },
  {
    brand: "鷹来屋",
    pref: "大分県",
    brewery: "浜嶋酒造",
  },
  {
    brand: "ちえびじん",
    pref: "大分県",
    brewery: "中野酒造",
  },
  {
    brand: "泰斗",
    pref: "熊本県",
    brewery: "千代の園酒造",
  },
  {
    brand: "東洋美人ippo",
    pref: "山口県",
    brewery: "澄川酒造場",
  },
  {
    brand: "仙禽",
    pref: "栃木県",
    brewery: "せんきん",
  },
  {
    brand: "鳳凰美田",
    pref: "栃木県",
    brewery: "小林酒造",
  },
  {
    brand: "姿",
    pref: "栃木県",
    brewery: "飯沼銘醸",
  },
  {
    brand: "大那",
    pref: "栃木県",
    brewery: "菊の里酒造",
  },
  {
    brand: "写楽",
    pref: "福島県",
    brewery: "宮泉銘醸",
  },
  {
    brand: "会津中将",
    pref: "福島県",
    brewery: "鶴乃江酒造",
  },
  {
    brand: "国権",
    pref: "福島県",
    brewery: "国権酒造",
  },
  {
    brand: "一歩己",
    pref: "福島県",
    brewery: "豊国酒造",
  },
  {
    brand: "雪の茅舎",
    pref: "秋田県",
    brewery: "齋彌酒造店",
  },
  {
    brand: "ゆきの美人",
    pref: "秋田県",
    brewery: "秋田醸造",
  },
  {
    brand: "刈穂",
    pref: "秋田県",
    brewery: "秋田清酒",
  },
  {
    brand: "出羽桜",
    pref: "山形県",
    brewery: "出羽桜酒造",
  },
  {
    brand: "上喜元",
    pref: "山形県",
    brewery: "酒田酒造",
  },
  {
    brand: "栄光冨士",
    pref: "山形県",
    brewery: "冨士酒造",
  },
  {
    brand: "雅山流",
    pref: "山形県",
    brewery: "新藤酒造店",
  },
  {
    brand: "浦霞",
    pref: "宮城県",
    brewery: "佐浦",
  },
  {
    brand: "伯楽星",
    pref: "宮城県",
    brewery: "新澤醸造店",
  },
  {
    brand: "日高見",
    pref: "宮城県",
    brewery: "平孝酒造",
  },
  {
    brand: "墨廼江",
    pref: "宮城県",
    brewery: "墨廼江酒造",
  },
] as const;

export type SakeItem = (typeof SAKE_DATA)[number];
export type Mode = "brand" | "pref";

export default function Home() {
  const [mode, setMode] = useState<Mode>("brand");
  const [key, setKey] = useState(0);

  function switchMode(m: Mode) {
    setMode(m);
    setKey((k) => k + 1);
  }

  function handleExit(replay: boolean) {
    if (replay) {
      setKey((k) => k + 1);
    } else {
      setKey((k) => k + 1);
    }
  }

  return (
    <div className="w-full flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <header>
        <div className="kicker">SAKE FLASHCARDS</div>
        <h1>銘酒暗記帳</h1>
        <div className="sub">銘柄・都道府県・酒造を覚える一問一答</div>
      </header>

      <main className="w-full md:max-w-lg px-4">
        <div className="tabs">
          <button
            className={"tab " + (mode === "brand" ? "active" : "")}
            onClick={() => switchMode("brand")}
          >
            銘柄 → 産地・酒造
          </button>
          <button
            className={"tab " + (mode === "pref" ? "active" : "")}
            onClick={() => switchMode("pref")}
          >
            都道府県 → 銘柄
          </button>
        </div>

        <ClientDeckRunner
          key={mode + key}
          mode={mode}
          data={SAKE_DATA}
          onExit={handleExit}
        />
      </main>
    </div>
  );
}
