function (key, mapValues) {

    var value =
	{
    	count_votos : 0,
    	score : 0
    };

    for (var i = 0; i < mapValues.length; i++)
 	{
    	value.count_votos += mapValues[i].count_votos;
    	value.score += mapValues[i].score;
    }

    return value; 
}
  
