import {
  fetchArticles,
  fetchArticleById,
  addArticle,
  addReview,
  fetchReviews
} from "../services/articles.js";
import HttpError from '../utils/HttpError.js';

const getArticles = (req, res, next) => {
  const {} = req.params;
  fetchArticles()
    .then((articles) => {
        res.json(articles);
    })
    .catch((err) => {
        // eg. DB connection error
        // 500 -> Internal Server Error
        const httpError = new HttpError( err.message, 500 );
        next( httpError );
    });
};
// GET /Articles/:_id
// Example: /Articles/61dd7711cbf3176114766adb
const getArticleById = (req, res, next) => {
  const { _id } = req.params;

  fetchArticleById(_id)
    .then((Article) => {
      if( !Article ) {
          // 404 -> Not Found
          const httpError = new HttpError( 'Article with given id does not exist', 404 );
          next( httpError );
          return;
      }

      res.json(Article);
    })
    .catch((err) => {
      if( err.kind === 'ObjectId' ) {
          // 400 -> BAD REQUEST
          const httpError = new HttpError( 'Invalid Article id', 400 );
          next( httpError );
      } else {
          // eg. DB connection error
          // 500 -> Internal Server Error
          const httpError = new HttpError( err.message, 500 );
          next( httpError );
      }
    });
};

// POST /Articles
const postArticle = (req, res, next) => {
  const { body } = req;
  console.log( Object.keys( body ) );

  // check if the body is an empty object
  if( Object.keys( body ).length === 0 ) {
    const httpError = new HttpError( 'Request body is empty. Article details are missing.', 400 );
    next( httpError );
    return;
  }

  addArticle( body )
    .then(Article => {
      res.status( 201 ).json( Article );
    })
    .catch(err => {
      const httpError = new HttpError( err.message, 400 );
      next( httpError );
    });
};

// POST /:_id/reviews
const postReview = (req, res, next) => {
  const { _id } = req.params;
  const { body } = req;

  // check if the body is an empty object
  if( Object.keys( body ).length === 0 ) {
    const httpError = new HttpError( 'Request body is empty. Review details are missing.', 400 );
    next( httpError );
    return;
  }

  addReview( _id, body )
    .then(Article => {
      res.status( 201 ).json( Article );
    })
    .catch(err => {
      const httpError = new HttpError( err.message, 400 );
      next( httpError );
    });
};

const getReviews = (req, res, next) => {
  const { _id } = req.params;

  fetchReviews( _id )
    .then((reviews) => {
        res.json(reviews);
    })
    .catch((err) => {
        const httpError = new HttpError( err.message, 500 );
        next( httpError );
    });
}

export { getArticles, getArticleById, postArticle, postReview, getReviews };