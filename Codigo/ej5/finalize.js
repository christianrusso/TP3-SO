function (key, reducedValue)
{
	if (reducedValue.score > 280 && reducedValue.score < 300)
		return (reducedValue.cantidad_palabras);
	else
		return -1;
}
