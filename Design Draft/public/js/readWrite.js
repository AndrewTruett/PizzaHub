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


function checkCustomerType(username,store)
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
// console.log(checkCustomerType("mickey","littleItaly"));
// console.log(checkCustomerType("mickey","garlicNewYorkPizzaBar"));
// console.log(checkCustomerType("mickey","donHyder"));


function checkCustomerRating(username,store)
//pre-cond: customer is already a member of the store
//post-cond: returns rating, returns 0 if not a member of the store
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
          return data.customers[i].membership[j].rating;
        }
      }
    }
  }

  return 0;
}

// console.log(checkCustomerRating("mickey","littleItaly"));
// console.log(checkCustomerRating("mickey","garlicNewYorkPizzaBar"));
// console.log(checkCustomerRating("mickey","donHyder"));


function checkCustomerBlacklisted(username)
//pre-cond: customer is already a member in any of the store
//post-cond: returns blacklisted, also returns customer not found
{
  var contents = fs.readFileSync("../system/customers.json");
  var data = JSON.parse(contents);

  for(var i=0; i<data.customers.length; i++)
  {
    if (data.customers[i].username == username)
    {
      return data.customers[i].blacklisted;
    }
  }

  return false;
}

console.log(checkCustomerBlacklisted("mickey"));
