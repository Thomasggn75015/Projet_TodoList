package Todolist.accessingdatamysql;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/api")
public class TodoController {
    @Autowired
    private TodoRepository todoRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewTodoItem (@RequestBody String text) {

        TodoItem todos = new TodoItem();
        todos.setText(text);
        todos.setFinished(false);
        todoRepository.save(todos);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<TodoItem> getAllTodoItems() {

        return todoRepository.findAll();
    }

    @PutMapping(path="/update")
    java.util.Optional<TodoItem> replaceTodoItem(@RequestParam Integer id, @RequestParam String text, @RequestParam Boolean finished) {
        return todoRepository.findById(id)
                .map(todoItem -> {
                    todoItem.setText(text);
                    todoItem.setFinished(finished);
                    return todoRepository.save(todoItem);
                });
    }

    @DeleteMapping("/suppress")
    void deleteTodoItem(@RequestBody Integer id) {
        todoRepository.deleteById(id);
    }
}
