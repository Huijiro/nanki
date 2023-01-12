type Deck = {
	id: string;
	name: string;
	createdAt: Date;
	updatedAt: Date;
	cards: Card[];
};

type DeckInfo = Omit<Deck, 'id' | 'cards'>;
