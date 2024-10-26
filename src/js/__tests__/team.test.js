import Team from "../team";
import Character from "../character";


const firstCharacter = new Character('Neo', 'Undead');
const secondCharacter = new Character('John', 'Swordsman');
const team = new Team();

test('should add new character', () => {
  team.add(firstCharacter);
  const result = team.members.has(firstCharacter);
  const expected = true;

  expect(result).toBe(expected);
});

test('should return an existing character error', () => {
  const existingCharacter = function() {
    team.add(firstCharacter);
  };
  const expected = 'Такой объект уже существует в команде';
 
  expect(existingCharacter).toThrow(expected);
});

test('should add all uniqe characters', () => {
  team.addAll(firstCharacter, secondCharacter, secondCharacter);
  const result = team.members.size;
  const expected = 2;

  expect(result).toBe(expected);
});


test('should convert team set to array', () => {
  const result = team.toArray();
  const expected = [
    {
      name: 'Neo',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: null,
      defence: null
    },
    {
      name: 'John',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: null,
      defence: null
    }
  ];

  expect(result).toEqual(expected);
});
