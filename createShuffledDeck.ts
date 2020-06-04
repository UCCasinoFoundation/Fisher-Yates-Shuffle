export function createShuffledDeck(hash: string, salt: string) {
  const deck = createDeck();
  const random = new Hash(hash, salt);
  // random shuffle deck, using fisher-yates algorithm
  for (const i of [...Array.from({ length: deck.length - 1 })].keys()) {
    const j = Math.floor(random.nextNormal() * (deck.length - i)) + i;
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck
}
