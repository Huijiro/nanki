type Deck = {
	id: string;
	name: string;
	createdAt: Date;
	viewedAt: Date;
	cards: Card[];
};

type DeckInfo = Omit<Deck, 'id' | 'cards'>;

type DeckName = Omit<Deck, 'id' | 'createdAt' | 'viewedAt' | 'cards'>;
