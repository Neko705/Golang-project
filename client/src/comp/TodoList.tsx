import { Flex, Spinner, Stack, Text } from "@chakra-ui/react";
import TodoItem from "./TodoItem";
import { useQuery } from "@tanstack/react-query";
import { FcInspection } from "react-icons/fc";

export type Todo = {
    _id: number;
    body: string;
    completed: boolean;
}
const TodoList = () => {
const {data: todos, isLoading}= useQuery<Todo[]>({
    queryKey: ['todos'],

    queryFn: async () => {
        try {
            const res = await fetch("http://localhost:5000/api/todos");
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "An error occurred while fetching data");
            }
            return data || [];
        } catch (error) {
            console.log(error);
        }
    }
})
// const todos = [
// 	{
// 		_id: 1,
// 		body: "Buy groceries",
// 		completed: true,
// 	},
// 	{
// 		_id: 2,
// 		body: "Walk the dog",
// 		completed: false,
// 	},
// 	{
// 		_id: 3,
// 		body: "Do laundry",
// 		completed: false,
// 	},
// 	{
// 		_id: 4,
// 		body: "Cook dinner",
// 		completed: true,
// 	},
// ];
return (
    	<>
		<Text fontSize={"4xl"} textTransform={"uppercase"} fontWeight={"bold"} textAlign={"center"} my={2}>
			Today's Tasks
		</Text>
		{isLoading && (
			<Flex justifyContent={"center"} my={4}>
				<Spinner size={"xl"} />
			</Flex>
		)}
		{!isLoading && todos?.length === 0 && (
			<Stack alignItems={"center"} gap='3'>
				<Text fontSize={"xl"} textAlign={"center"} color={"gray.500"}>
					All tasks completed! 🤞
				</Text>
				<FcInspection size={100} />
			</Stack>
		)}
		<Stack gap={3}>
 			{todos?.map((todo) => (
 				<TodoItem key={todo._id} todo={todo} />
 			))}
 		</Stack>
	</>
);
};
export default TodoList;