function()
{
	var value =
	{
		count : 1,
		cant_comentarios : this.number_of_comments
	};

	emit(this.score, value);
}
