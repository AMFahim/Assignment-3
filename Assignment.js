


//kilometerToMeter problem solving

function kilometerToMeter(kilometer) {
  var meter = kilometer * 1000;
  return meter;
}

//budgetCalculator problem solving

function budgetCalculator(cost) {
  var watch = 40;
  var mobile = 110;
  var laptop = 300;
  overAllCost = watch + mobile + laptop;
  return overAllCost;
  
}


//hotelCost problem solveing

function hotelCost(overAllDay) {
  var cost = 0;
  if (overAllDay <= 10) {
    cost = overAllDay * 100;
  }
  else if (overAllDay <= 20) {
    var first10Day = 10 * 100;
    var remainingDay = overAllDay - 10;
    var second10Day = remainingDay * 80;
    cost = first10Day + second10Day;
  }
  else {
    var first10Day = 10 * 100;
    var second10Day = 10 * 80;
    var remainingDay = overAllDay - 20;
    var nextSomeDay = remainingDay * 50;
    cost = first10Day + second10Day + nextSomeDay;
  }
  return cost;
}

// megaFriend problem solving

  var friendsName = ['Rahat', 'joy', 'Tonu'];
  function megaFriend(friendsName){
    if(friendsName.length == 0)
        return null;
    var char = {};
    var maxChar = friendsName[0], maxCountChar = 1;
    for(var i = 0; i < friendsName.length; i++)
    {
        var el = friendsName[i];
        if(char[el] == null)
            char[el] = 1;
        else
            char[el]++;  
        if(char[el] > maxCountChar)
        {
            maxChar = el;
            maxCountChar = char[el];
        }
    }
    return maxChar;
}

