import { Todo } from "../models/todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }
    const todo = new Todo({ title, description });
    await todo.save();
    res.status(201).json({
      success: true,
      message: "Todo created successfully",
      todo,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error creating Todos",
    });
    console.log(error);
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    console.log(todos);
    res.status(200).json({
      success: true,
      todos,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error fetching Todos",
    });
    console.log(error);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const { title } = req.body;
    console.log(title);
    // const todo = await Todo.findById(todoId);
    // todo.title = title;

    const todo = await Todo.findByIdAndUpdate(todoId, { title }, { new: true });
    await todo.save();

    return res
      .status(200)
      .json({ success: true, todo, message: "Todo updated successfully" });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Can't update Todo",
    });
    console.log(error);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    await Todo.findByIdAndDelete(todoId);
    return res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error deleting Todo",
    });
    console.log(error);
  }
};
