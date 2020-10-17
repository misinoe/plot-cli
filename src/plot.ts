export const cards = [
  '意思',
  '清楚',
  '理性',
  '秩序',
  '知恵',
  '制約',
  '善良',
  '節度',
  '至誠',
  '生命',
  '寛容',
  '開放',
  '調和',
  '創造',
  '信頼',
  '公式',
  '変化',
  '結合',
  '厳格',
  '勇気',
  '幸運',
  '庇護',
  '治癒',
  '慈愛',
];

export function generatePlot() {
  const cardDeck = cards.slice(0);
  const takeCard = () => {
    const prefix = Math.random() < 0.5 ? '<逆>' : '';
    return prefix + cardDeck.splice(cardDeck.length * Math.random() | 0, 1)[0];
  };

  return {
    '1.主人公の現在': takeCard(),
    '2.主人公の近い未来': takeCard(),
    '3.主人公の過去': takeCard(),
    '4.援助者': takeCard(),
    '5.敵対者': takeCard(),
    '6.結末(目的)': takeCard(),
  }
}
