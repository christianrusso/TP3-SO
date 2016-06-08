function (key, reducedValue)
{ 
	if(reducedValue.count_votos >= 2000)
		return reducedValue.score;
	else
		return 0;
}
