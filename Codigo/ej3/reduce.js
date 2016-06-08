function (key, mapValues)
{ 
	var value =
	{
    	count : 0,
    	cant_comentarios : 0.0
    };

    for (var i = 0; i < mapValues.length; i++)
	{
    	value.count += mapValues[i].count;
    	value.cant_comentarios += parseFloat(mapValues[i].cant_comentarios);
    }

    return value;
}

