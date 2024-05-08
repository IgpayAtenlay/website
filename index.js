import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

// app.get

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/:pageName", (req, res) => {
  var pageName = req.params.pageName;
  res.render(`${pageName}.ejs`);
});

// app.post

app.post("/diceCalculator", (req, res) => {
  var percentHit = chanceOfHitting(req.body);
  var damagePerHit = damageWhenHit(req.body);
  console.log(damagePerHit);
  res.render(`diceCalculator.ejs`, {
    body: req.body,
    average: calculateAverageDamage(req.body, percentHit, damagePerHit),
    max: calculateMaxDamage(req.body),
    min: calculateMinDamage(req.body),
    percentCS: Math.round(percentHit.percentCS * 100),
    percentS: Math.round(percentHit.percentS * 100),
    percentF: Math.round(percentHit.percentF * 100),
    percentCF: Math.round(percentHit.percentCF * 100)
  });
})

// math functions

function chanceOfHitting(body) {
  if (body.fortune || body.misfortune) {
    return percentHitFortune(body);
  } else if (body.rerollSuccess || body.rerollFail || body.rerollCritFail) {
    return percentHitRerollOn(body);
  } else {
    return percentHit(body);
  }
}

function damageWhenHit(body) {
  if (body.strike) {
    var successDamage = parseDamageAverage(body.successDice) || 0;
    var critSuccessDamage = successDamage * 2;
    var failDamage = 0;
    var critFailDamage = 0;
  } else if (body.basicSave) {
    var failDamage = parseDamageAverage(body.failDice) || 0;
    var critSuccessDamage = 0;
    var successDamage = failDamage / 2;
    var critFailDamage = failDamage * 2;
  } else {
    var critSuccessDamage = parseDamageAverage(body.critSuccessDice) || 0;
    var successDamage = parseDamageAverage(body.successDice) || 0;
    var failDamage = parseDamageAverage(body.failDice) || 0;
    var critFailDamage = parseDamageAverage(body.critFailDice) || 0;
  }

  if (body.investigator) {
    if (body.strike) {
      var stratagemSuccessDamage = parseDamageAverage(body.stratagemSuccessDice) || 0;
      var stratagemCritSuccessDamage = stratagemSuccessDamage * 2;
      var stratagemFailDamage = 0;
      var stratagemCritFailDamage = 0;
    } else if (body.basicSave) {
      var stratagemFailDamage = parseDamageAverage(body.stratagemFailDice) || 0;
      var stratagemCritSuccessDamage = 0;
      var stratagemSuccessDamage = stratagemFailDamage / 2;
      var stratagemCritFailDamage = stratagemFailDamage * 2;
    } else {
      var stratagemCritSuccessDamage = parseDamageAverage(body.stratagemCritSuccessDice) || 0;
      var stratagemSuccessDamage = parseDamageAverage(body.stratagemSuccessDice) || 0;
      var stratagemFailDamage = parseDamageAverage(body.stratagemFailDice) || 0;
      var stratagemCritFailDamage = parseDamageAverage(body.stratagemCritFailDice) || 0;
    }

    var damageWhenHit = {
      critSuccessDamage: critSuccessDamage,
      successDamage: successDamage,
      failDamage: failDamage,
      critFailDamage: critFailDamage,
      stratagemCritSuccessDamage: stratagemCritSuccessDamage,
      stratagemSuccessDamage: stratagemSuccessDamage,
      stratagemFailDamage: stratagemFailDamage,
      stratagemCritFailDamage: stratagemCritFailDamage
    }
  } else {
    var damageWhenHit = {
      critSuccessDamage: critSuccessDamage,
      successDamage: successDamage,
      failDamage: failDamage,
      critFailDamage: critFailDamage
    }
  }

  return damageWhenHit;
}

function calculateAverageDamage(body, percentHit, damageWhenHit) {
  console.log(percentHit)
  if (body.investigator && percentHit.percentRRCS) {
    var average = damageWhenHit.stratagemCritSuccessDamage * percentHit.percentCS + damageWhenHit.stratagemSuccessDamage * percentHit.percentS + damageWhenHit.stratagemFailDamage * percentHit.percentF + damageWhenHit.stratagemCritFailDamage * percentHit.percentCF + 
    damageWhenHit.critSuccessDamage * percentHit.percentRRCS + damageWhenHit.successDamage * percentHit.percentRRS + damageWhenHit.failDamage * percentHit.percentRRF + damageWhenHit.critFailDamage * percentHit.percentRRCF;
  } else if (body.investigator) {
    var average = damageWhenHit.stratagemCritSuccessDamage * percentHit.percentCS + damageWhenHit.stratagemSuccessDamage * percentHit.percentS + damageWhenHit.stratagemFailDamage * percentHit.percentF + damageWhenHit.stratagemCritFailDamage * percentHit.percentCF;
  } else {
    var average = damageWhenHit.critSuccessDamage * percentHit.percentCS + damageWhenHit.successDamage * percentHit.percentS + damageWhenHit.failDamage * percentHit.percentF + damageWhenHit.critFailDamage * percentHit.percentCF;
  }

  return average;
}

function calculateMaxDamage(body) {
  if (body.investigator) {
    if (body.strike) {
      var max = Math.max(parseDamageMax(body.successDice), parseDamageMax(body.stratagemSuccessDice)) * 2;
    } else  if (basicSave) {
      var max = Math.max(parseDamageMax(body.failDice), parseDamageMax(body.stratagemFailDice)) * 2;
    } else {
      var max = Math.max(parseDamageMax(body.critSuccessDice), parseDamageMax(body.successDice), parseDamageMax(body.failDiceDice), parseDamageMax(body.critFailDice), parseDamageMax(body.stratagemCritSuccessDice), parseDamageMax(body.stratagemSuccessDice), parseDamageMax(body.stratagemFailDiceDice), parseDamageMax(body.stratagemCritFailDice));
    }
  } else {
    if (body.strike) {
      var max = parseDamageMax(body.successDice) * 2;
    } else  if (basicSave) {
      var max = parseDamageMax(body.failDice) * 2;
    } else {
      var max = Math.max(parseDamageMax(body.critSuccessDice), parseDamageMax(body.successDice), parseDamageMax(body.failDiceDice), parseDamageMax(body.critFailDice));
    }
  }

  return max;
}

function calculateMinDamage(body) {
  if (body.investigator) {
    if (body.strike) {
      var min = minNotZero(parseDamageMin(body.successDice), parseDamageMin(body.stratagemSuccessDice)) / 2;
    } else  if (basicSave) {
      var min = minNotZero(parseDamageMin(body.failDice), parseDamageMin(body.stratagemFailDice)) / 2;
    } else {
      var min = minNotZero(parseDamageMin(body.critSuccessDice), parseDamageMin(body.successDice), parseDamageMin(body.failDiceDice), parseDamageMin(body.critFailDice), parseDamageMin(body.stratagemCritSuccessDice), parseDamageMin(body.stratagemSuccessDice), parseDamageMin(body.stratagemFailDiceDice), parseDamageMin(body.stratagemCritFailDice));
    }
  } else {
    if (body.strike) {
      var min = parseDamageMin(body.successDice) / 2;
    } else  if (basicSave) {
      var min = parseDamageMin(body.failDice) / 2;
    } else {
      var min = minNotZero(parseDamageMin(body.critSuccessDice), parseDamageMin(body.successDice), parseDamageMin(body.failDiceDice), parseDamageMin(body.critFailDice));
    }
  }

  min = Math.floor(min);

  if (min <= 0) {
    min = 1;
  }

  return min;
}

function minNotZero(...values) {
  var min = 0;
  values.forEach((number) => {
    if (min === 0) {
      min = number;
    } else if (number != 0) {
      min = Math.min(min, number);
    }
  })
  return min;
}

function percentHit(body) {
  var modifier = parseInt(body.modifier || 0);
  if (body.investigator) {
    modifier = parseInt(body.stratagemModifier || 0)
  }
  var DC = parseInt(body.DC || 0);
  var numCS = 0;
  var numS = 0;
  var numF = 0;
  var numCF = 0;

  if (modifier - 9 >= DC) {
    numCS = 19;
    numS = 1;
  } else if (modifier + 1 >= DC) {
    numCS = 11 + modifier - DC;
    numS = 8 + DC - modifier;
    numF = 1;
  } else if (modifier + 10 >= DC) {
    numCS = 11 + modifier - DC;
    numS = 10;
    numF = DC - modifier - 2;
    numCF = 1;
  } else if (modifier + 11 >= DC) {
    numCS = 1;
    numS = 9;
    numF = 9;
    numCF = 1;
  } else if (modifier + 20 >= DC) {
    numCS = 1;
    numS = 20 + modifier - DC;
    numF = 10;
    numCF = DC - modifier - 11;
  } else if (modifier + 30 >= DC) {
    numS = 1;
    numF = 30 + modifier - DC;
    numCF = DC - modifier - 11;
  } else {
    numF = 1;
    numCF = 19;
  }

  var percentCS = numCS/20;
  var percentS = numS/20;
  var percentF = numF/20;
  var percentCF = numCF/20;

  if (body.StoCS) {
    percentCS += percentS;
    percentS = 0;
  }
  if (body.FtoS) {
    percentS += percentF;
    percentF = 0;
  }
  if (body.CFtoS) {
    percentS += percentCF;
    percentCF = 0;
  }
  if (body.CFtoF) {
    percentF += percentCF;
    percentCF = 0;
  }
  if (body.FtoCF) {
    percentCF += percentF;
    percentF = 0;
  }
  
  var percentHit = {
    percentCS: percentCS,
    percentS: percentS,
    percentF: percentF,
    percentCF: percentCF
  }

  return percentHit;
}

function percentHitFortune(body) {
  var modifier = parseInt(body.modifier || 0);
  var DC = parseInt(body.DC || 0);
  var CS = 0;
  var S = 0;
  var F = 0;
  var CF = 0;

  for (var diceOne = 1; diceOne <= 20; diceOne++) {
    for (var diceTwo = 1; diceTwo <= 20; diceTwo++) {
      var result = dieSuccess(DC, modifier, die, body);
      switch(result) {
        case "CS":
          CS++;
          break;
        case "S":
          S++;
          break;
        case "F":
          F++;
          break;
        case "CF":
          CF++;
          break;
      }
    }
  }

  var percentHit = {
    percentCS: CS / 400,
    percentS: S / 400,
    percentF: F / 400,
    percentCF: CF / 400
  }

  return percentHit;
}

function dieSuccess(DC, modifier, die, body) {
  var result;
  if (die + modifier >= DC + 10) {
    result = "CS";
  } else if (die + modifier >= DC) {
    result = "S";
  } else if (die + modifier >= DC - 10) {
    result = "F";
  } else {
    result = "CF";
  }

  if (die === 20) {
    switch(result) {
      case "S":
        result = "CS";
        break;
      case "F":
        result = "S";
        break;
      case "CF":
        result = "F";
        break;
    }
  } else if (die === 1) {
    switch(result) {
      case "CS":
        result = "S";
        break;
      case "S":
        result = "F";
        break;
      case "F":
        result = "CF";
        break;
    }
  }

  if (body.StoCS && result === "S") {
    result === "CS";
  }
  if (body.FtoS && result === "F") {
    result === "S";
  }
  if (body.CFtoS && result === "CF") {
    result === "S";
  }
  if (body.CFtoF && result === "CF") {
    result === "F";
  }
  if (body.FtoCF && result === "F") {
    result === "CF";
  }

  return result;
}

function percentHitRerollOn(body) {
  if (body.investigator) {
    var modifierOne = parseInt(body.stratagemModifier || body.modifier);
  } else {
    var modifierOne = parseInt(body.modifier || 0);
  }
  var modifierTwo = parseInt(body.modifier || 0);
  var DC = parseInt(body.DC || 0);
  var degreesOfSuccess = [body.rerollSuccess, body.rerollFail, body.rerollCritFail]
  var CS = 0;
  var S = 0;
  var F = 0;
  var CF = 0;
  var rrCS = 0;
  var rrS = 0;
  var rrF = 0;
  var rrCF = 0;
  for (var diceOne = 1; diceOne <= 20; diceOne++) {
    var result = dieSuccess(DC, modifierOne, diceOne, body);

    if (degreesOfSuccess.includes(result)) {
      for (var diceTwo = 1; diceTwo <= 20; diceTwo++) {
        result = dieSuccess(DC, modifierTwo, diceTwo, body);
        switch(result) {
          case "CS":
            rrCS++;
            break;
          case "S":
            rrS++;
            break;
          case "F":
            rrF++;
            break;
          case "CF":
            rrCF++;
            break;
        }
      }
    } else {
      switch(result) {
        case "CS":
          CS += 20;
          break;
        case "S":
          S += 20;
          break;
        case "F":
          F += 20;
          break;
        case "CF":
          CF += 20;
          break;
      }
    }
  }

  if (body.investigator) {
    var percentHit = {
      percentCS: CS / 400,
      percentS: S / 400,
      percentF: F / 400,
      percentCF: CF / 400,
      percentRRCS: rrCS / 400,
      percentRRS: rrS / 400,
      percentRRF: rrF / 400,
      percentRRCF: rrCF / 400
    }
  } else {
    var percentHit = {
      percentCS: (CS + rrCS) / 400,
      percentS: (S + rrS) / 400,
      percentF: (F + rrF) / 400,
      percentCF: (CF + rrCF) / 400
    }
  }

  return percentHit;
}

function parseDamageAverage(diceString) {
  var damage = 0;
  if (diceString) {
    diceString.split("+").forEach((element) => {
      if (isNaN(element)) {
        damage += parseInt(element.split("d")[0]) * (parseInt(element.split("d")[1]) + 1) / 2;
      } else {
        damage += parseInt(element);
      }
    })
  }

  // need to add calculations including damage minimums

  return damage;
}

function parseDamageMin(diceString) {
  var damage = 0;
  if (diceString) {
    diceString.split("+").forEach((element) => {
      if (isNaN(element)) {
        damage += parseInt(element.split("d")[0]);
      } else {
        damage += parseInt(element);
      }
    })

    if (damage <= 0) {
      damage = 1;
    }
  }

  return damage;
}

function parseDamageMax(diceString) {
  var damage = 0;
  if (diceString) {
    diceString.split("+").forEach((element) => {
      if (isNaN(element)) {
        damage += parseInt(element.split("d")[0]) * parseInt(element.split("d")[1]);
      } else {
        damage += parseInt(element);
      }
    })

    if (damage <= 0) {
      damage = 1;
    }
  }

  return damage;
}

// start server

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});