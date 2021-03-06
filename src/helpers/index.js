export const housesDataWrangler = housesArray => 
  housesArray.map(house => ({
    name: house.name,
    founded: house.founded,
    seats: house.seats.join(', '),
    titles: house.titles,
    coatOfArms: house.coatOfArms,
    ancestralWeapons: house.ancestralWeapons.join(', '),
    words: house.words,
    swornMembers: house.swornMembers.map(member => member.slice(49))
  }));

export const swornMembersDataWrangler = membersArray => 
  membersArray.map(member => ({
    name: member.name,
    died: member.died || 'Alive'
  }));