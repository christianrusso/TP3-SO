function (key, mapValues)
{     
    var value =
	{
		score: 0,
		cantidad_palabras : 0
	};
	    
    for(var i = 0; i < mapValues.length; i++)
	{
        value.cantidad_palabras += mapValues[i].cantidad_palabras;
        value.score += mapValues[i].score;
    }

    return value;
}
