const team = {
    _players: [
      {
       firstName: "Kyle", 
       lastName: "Lowry",
       age: 35 
      },
      {
        firstName: "Jimmy",
        lastName: "Butler",
        age: 32
      },
      {
        firstName: "P.J.",
        lastName: "Tucker",
        age: 36
      }
    ],
    _games:[
      {
        opponent: "Nets",
        teamPoints: 106,
        opponentPoints: 27
      },
  {
        opponent: "Magic",
        teamPoints: 107,
        opponentPoints: 90
      },
      {
        opponent: "Pacers",
        teamPoints: 91,
        opponentPoints: 102
      }
    ],
  
    get players() {
      return this._players;
    },
    get games(){
      return this._games;
    },
  
  
  
  addPlayer(firstName,lastName,age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age:age
    };
    this.players.push(player)
  },
  
  addGame(opp,myPts,oppPts){
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    }
    this.games.push(game)
  }
  };
  
  team.addPlayer("Bam","Adebayo",24);
  team.addPlayer("Victor","Oladipo",29);
  team.addPlayer("Duncan","Robinson",27);
  
  console.log(team.players);
  
  team.addGame("Hawks",125,99);
  team.addGame("Rockets",113,106);
  team.addGame("Spurs",109,105);
  
  console.log(team.games);