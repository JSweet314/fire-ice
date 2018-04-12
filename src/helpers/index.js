export const housesDataWrangler = housesArray => 
  housesArray.map(house => ({
    name: house.name,
    founded: house.founded,
    seats: house.seats.join(', '),
    titles: house.titles,
    coatOfArms: house.coatOfArms,
    ancestralWeapons: house.ancestralWeapons.join(', '),
    words: house.words
  }));