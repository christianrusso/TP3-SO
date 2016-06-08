function(key, mapValues)
{
	var value =
 	{
		count : 0,
		score : 0.0
	};

	for (var i = 0; i < mapValues.length; i++)
	{
		value.score += mapValues[i].score;
		value.count += mapValues[i].count;
	}

	return value;
}
