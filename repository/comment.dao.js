const { Error } = require('mongoose');
const Comment = require('../models/comment.model');

class CommentRepository {
  constructor(CommentModel) {
    this.comment = CommentModel;
  }

  createComment = async(video, user, comment) => {
    try {
      if(!video) {
        return {
          type: 'Error',
          message: 'Id do video não enviado'
        }
      }

      if(!user) {
        return {
          type: 'Error',
          message: 'Id do user não enviado'
        }
      }

      if(!comment) {
        return {
          type: 'Error',
          message: 'Id do comment não enviado'
        }
      }

      const newComment = await this.comment.create({video, user, comment});

      if(newComment) {
        return {
          type: 'Success',
          message: 'Post criado com sucesso.',
          data: comment,
        }
      }

      if(!newComment) {
        return {
          type: 'Error',
          message: 'Erro ao criar comentário',
          data: newComment,
        }
      }
    }
    catch(error) {
      throw new Error();
    }
  }
}

module.exports = new CommentRepository(Comment);
