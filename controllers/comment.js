const Comment = require('../models/comment')

const getComments = async(req,res) => {
  const totalComments = await Comment.find()
  res.json(totalComments)
}

const createComments = async(req,res) => {
  try {
    const { userName,
      email,
      comment,
      like,
      disLike} = req.body
    
    const createComment = new Comment({
      userName,
      email,
      comment,
      like,
      disLike
    }
    )

  await createComment.save() 
  
    res.status(200).json(createComment)
  } catch (error) {
    res.status(error.code || 500).json({message:error.message})
  }
}


const voteComment = async (req,res) => {
  const { _id, userName,
    email,
    comment,
    like,
    disLike } = req.body
  try {
    const voteComment = await Comment.findByIdAndUpdate(_id, {
      userName,
      email,
      comment,
      like,
      disLike
    })
    res.json({
      message: `COMENTARIO <<${voteComment.comment}>> ahora tiene ${voteComment.like} likes y ${voteComment.disLike} dislikes.`
    })
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
}

const deleteComment = async (req,res) => {
  const {_id } = req.params
  
  const comment = await Comment.findById(_id)

  try {
    await Comment.findByIdAndDelete(comment)
    res.json({
      message: `COMENTARIO <<${comment.comment}>> ELIMINADO correctamente`
    })
  } catch (error) {
    console.error(error)
  }
}

module.exports = { getComments, createComments, voteComment, deleteComment }