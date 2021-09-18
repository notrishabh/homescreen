import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7000/todoapi",
});

export const insertTodo = (payload) => api.post(`/todo`, payload);
export const getAllTodos = (id) => api.get(`/gettodo`, { params: { id: id } });
export const updateTodo = (id, payload) =>
  api.put(`/updatetodo/${id}`, payload);
export const deleteTodo = (id) => api.delete(`/deletetodo/${id}`);

const apis = {
  insertTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
};

export default apis;
