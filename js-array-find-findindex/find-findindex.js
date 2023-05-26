
function findUserByUsername(usersArray, username) {
  return usersArray.find(function(u){
    return u.username === username;
  })
}


function removeUser(usersArray, username) {
  let foundI = usersArray.findIndex(function(user){
    return user.userArray === username;
  })

  if(foundI === -1) return;

  return usersArray.splice(foundI,1)[0];

}