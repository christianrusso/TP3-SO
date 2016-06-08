function()
{
	var value =
	{
		count : 1,
		score : parseFloat(this.score)
	};
	
	emit(this.subreddit, value);
}

