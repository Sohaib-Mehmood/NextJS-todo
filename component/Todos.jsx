import { useState } from 'react';

import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Badge,
} from '@chakra-ui/react';

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState('');

  const handleAdd = () => {
    setTodos([...todos, { id: Date.now(), title: title, completed: false }]);
    setTitle('');
  };

  const handleToggle = (id) => {
    let newTodoList = todos.filter((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(newTodoList);
  };

  const handleClearCompleted = () => {
    let newTodoList = todos.filter((todo) => {
      if (!todo.completed) return todo;
    });

    setTodos(newTodoList);
  };
  return (
    <Flex>
      <Stack>
        <Heading>Create a Todo ({todos.length})</Heading>
        <Text>Enter your Todo's here</Text>
        <FormControl>
          <Input
            placeholder="ToDo"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <Stack>
          <Button onClick={() => handleAdd()} disabled={title.length == 0}>
            Add Todo
          </Button>
        </Stack>
        <Stack>
          <ul>
            {todos.map((todo) => (
              <li>
                {todo.title}-{' '}
                <Badge colorScheme={todo.completed ? 'green' : 'red'}>
                  {todo.completed ? 'completed' : 'incomplete'}
                </Badge>
                <Button onClick={() => handleToggle(todo.id)}>Toggle</Button>
              </li>
            ))}
          </ul>

          <Button onClick={() => handleClearCompleted()}>
            {' '}
            Clear All Completed
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
