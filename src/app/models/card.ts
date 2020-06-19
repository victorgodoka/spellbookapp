export interface Card {
  id: number,
  name: string,
  type: string,
  desc: string,
  atk: number,
  race: string,
  attribute: string,
  linkval: number,
  linkmarkers: string[],
  card_sets: any[],
  card_images: any[],
  card_prices: any[]
}
