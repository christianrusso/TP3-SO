function()
{
	var value =
	{
		sumisiones: 1,
		upvotes : parseInt(this.number_of_upvotes)
	};
	
	emit(this.username, value);
}
