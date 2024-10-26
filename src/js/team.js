export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой объект уже существует в команде');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach(character => this.members.add(character));
  } 
    
  toArray() {
    const teamArr = [];
    this.members.forEach(member => teamArr.push(member));
    
    return teamArr;
  }
}
