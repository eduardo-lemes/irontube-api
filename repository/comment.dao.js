const { Error } = require('mongoose');
const Comment = require('../models/comment.model');

class CommentRepository {
  constructor(CommentModel) {
    this.comment = CommentModel;
  }

  createComment = async(video, user, comment) => {
    try {
      if(!video) {
        throw new Error('Id do video não enviado');
      }

      if(!user) {
        throw new Error('Id do user não enviado');
      }

      if(!comment) {
        throw new Error('Comentário não enviado');
      }

      const newComment = await this.comment.create({video, user, comment});

      if(newComment) {
        return {
          type: 'Success',
          message: 'Post criado com sucesso.',
          data: comment,
        }
      }

    }
    catch(error) {
      throw new Error();
    }
  }
}

module.exports = new CommentRepository(Comment);
