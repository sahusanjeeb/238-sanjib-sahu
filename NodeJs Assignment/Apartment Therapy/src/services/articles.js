/**
 * Service talks to the database (data layer)
 */
 import mongoose from "mongoose";
 
 const Article = mongoose.model("Article");
 
 const fetchArticles = () => {};
 
 const fetchArticleById = (_id) => {
	 return Article.findById(_id);
 };
 
 const addArticle = ( Article ) => {
	 return Article.create( Article );
 };
 const addReview = ( _id, review ) => {
	 return Article.findByIdAndUpdate( 
		 _id,
		 {
			 $push: {
				 reviews: review
			 }
		 },
		 {
			 new: true,
			 runValidators: true
		 }
	 );
 };
 
 const fetchReviews = ( _id ) => {
	 return Article
					 .findById( _id )
					 .select( 'reviews' )
					 .then(ArticleReviews => ArticleReviews.reviews)
 }
 
 export {
	 fetchArticles,
	 fetchArticleById,
	 addArticle,
	 addReview,
	 fetchReviews
 };