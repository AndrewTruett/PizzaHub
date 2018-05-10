var fs = require("fs");
// console.log("\n *STARTING* \n");
// var contents = fs.readFileSync("../system/customers.json");
// var data = JSON.parse(contents);
// console.log("User Name:",data.customers[0].memID);


function checkLoginCustomer(username,password,store)
{
  var contents = fs.readFileSync("../system/customers.json");
  var data = JSON.parse(contents);

  for(var i=0; i<data.customers.length; i++)
  {
    if (data.customers[i].username == username)
    {
      if (data.customers[i].password == password)
      {
        for (var j = 0; j < data.customers[i].membership.length; j++)
        {
          if (data.customers[i].membership[j].store == store)
          {
            return true;
          }
        }
      }
    }
  }

    return false;
}

// console.log(checkLoginCustomer("mickey","mouse","littleItaly"));


function checkUserType(username,store)
//returns visitor if user not found for store
{
  var contents = fs.readFileSync("../system/customers.json");
  var data = JSON.parse(contents);

  for(var i=0; i<data.customers.length; i++)
  {
    if (data.customers[i].username == username)
    {
      for (var j = 0; j < data.customers[i].membership.length; j++)
      {
        if (data.customers[i].membership[j].store == store)
        {
          return data.customers[i].membership[j].type;
        }
      }
    }
  }

  return "visitor";
}
// console.log(checkUserType("mickey","littleItaly"));
// console.log(checkUserType("mickey","garlicNewYorkPizzaBar"));
// console.log(checkUserType("mickey","donHyder"));
