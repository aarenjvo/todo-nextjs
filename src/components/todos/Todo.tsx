import { todoProps } from "@/types";
import ChangeTodo from "./ChangeTodo";

export default function Todo({ todo }: { todo: todoProps }) {
    return (
        <div className='grow mx-auto flex flex-row my-1 items-center bg-special-800 border border-special-300 py-4 pl-4 rounded-2xl bg-gradient-to-r from-special-800 to-special-600'>
            {/* ChangeTodo */}
            <ChangeTodo todo={todo} />
            <span className='anitialiased uppercase break-words overflow-hidden text-ellipsis'>{todo.title}</span>
            <div className='flex items-center mx-2'>
                {/* EditTodo */}
            </div>
            <div className='flex items-center mx-2'>
                {/* DeleteTodo */}
            </div>
        </div>
    )
}