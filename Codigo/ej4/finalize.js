function (key, reducedValue)
{ 
	if(reducedValue.sumisiones <= 5)
		return reducedValue.upvotes;
	else
		return 0;
}
