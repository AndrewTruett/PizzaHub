var fs = require("fs");
// console.log("\n *STARTING* \n");
// var contents = fs.readFileSync("../system/customers.json");
// var data = JSON.parse(contents);
// console.log("User Name:",data.customers[0].memID);




//customer --> //////////////////////////////////////////////
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

// console.log(checkCustomerBlacklisted("mickey"));


function checkCustomerExists(username)
//post-cond: returns if customer is in the system (true,false)
{
  var contents = fs.readFileSync("../system/customers.json");
  var data = JSON.parse(contents);

  for(var i=0; i<data.customers.length; i++)
  {
    if (data.customers[i].username == username)
    {
      return true;
    }
  }

  return false;
}
// console.log(checkCustomerExists("mickey"));


////////////////////////////////////////////////<- customer



//cook --> //////////////////////////////////////////////
function checkLoginCook(username,password,store)
{
  var contents = fs.readFileSync("../system/cooks.json");
  var data = JSON.parse(contents);


  for(var i=0; i<data.cooks.length; i++)
  {
    if (data.cooks[i].username == username)
    {
      if (data.cooks[i].store == store)
      {
        if (data.cooks[i].password == password)
        {
          return true;
        }
      }
    }
  }

  return false;
}
// console.log(checkLoginCook("cook","test","famousAmadeusPizza"));

////////////////////////////////////////////////<- cook


//deliveryGuy --> //////////////////////////////////////////////
function checkLoginDeliveryGuy(username,password,store)
{
  var contents = fs.readFileSync("../system/deliveryGuy.json");
  var data = JSON.parse(contents);


  for(var i=0; i<data.deliveryGuy.length; i++)
  {
    if (data.deliveryGuy[i].username == username)
    {
      if (data.deliveryGuy[i].store == store)
      {
        if (data.deliveryGuy[i].password == password)
        {
          return true;
        }
      }
    }
  }
  return false;
}
console.log(checkLoginDeliveryGuy("dg","test","famousAmadeusPizza"));
////////////////////////////////////////////////<- deliveryGuy


//manager --> //////////////////////////////////////////////
function checkLoginManager(username,password,store)
{

}
////////////////////////////////////////////////<- manager
