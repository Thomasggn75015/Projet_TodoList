package Todolist.accessingdatamysql;

import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends CrudRepository<TodoItem, Integer> {

}
