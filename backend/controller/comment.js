import Comment from "../model/Comment.js"
export const getAllComment = async (req, res) => {
  try {
    const data = await Comment.find({});;
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const getComment = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Comment.findById({ _id: id });
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const createComment = async (req, res) => {
  const { post_id,text,user_id} = req.body;
  try {
    const data = await Comment.create({
      post_id:post_id,
      user_id:user_id,
      text:text
    });

    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    console.log(error)
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Comment.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const comment = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Comment.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const getCommentPost = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await Comment.findById({ post_id: id });
      res.status(200).send({
        success: true,
        data: data,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        data: error.message,
      });
    }
  };