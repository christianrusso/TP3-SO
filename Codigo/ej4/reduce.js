function (key, mapValues)
{ 
    var value =
	{
    	sumisiones : 0,
    	upvotes : 0
    };

    for(var i = 0; i < mapValues.length; i++)
	{
    	value.sumisiones += mapValues[i].sumisiones;
    	value.upvotes += mapValues[i].upvotes;
    }

    return value; 
}
