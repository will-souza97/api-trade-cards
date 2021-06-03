import { ICard } from '../entities/card.entity';
import { IDescriptions } from '../entities/description.entity';
import { IInventory } from '../entities/inventory.entity';
import { IUser } from '../entities/user.entity';

export function getCardsService(
  inventory: IInventory,
  descriptions: IDescriptions
) {
  const cards: ICard[] = [];

  Object.values(inventory).map((card) => {
    Object.values(descriptions).map((description) => {
      if (card.classid === description.classid) {
        cards.push({
          cardid: card.id,
          icon_url: `https://community.akamai.steamstatic.com/economy/image/${description.icon_url}/520x540`,
          name: description.name,
          game: description.tags.find(({ category }) => category === 'Game')
            .name,
        });
      }
    });
  });

  return cards;
}

export function getAllCardsService(users: []) {
  const cards: ICard[] = [];

  Object.values(users).map((user: IUser) => {
    Object.values(user.cards).map((card: ICard) => {
      cards.push(card);
    });
  });

  return cards;
}
