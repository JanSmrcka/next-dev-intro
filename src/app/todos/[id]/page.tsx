import {Header} from "@/components/header";
import prisma from "@/lib/prisma";
import {ToggleButton} from "@/app/todos/[id]/components/toggle-button";
import {HomeButton} from "@/app/todos/[id]/components/home-button";
import {Metadata} from "next";

async function getTodo(id: number) {
    return prisma.todo.findUnique({
        where: {
            id: id
        }
    })
}

export const metadata:Metadata={
    title: "Todos",
    description:"..."
}

const TodoDetailPage = async ({params}: { params: { id: string } }) => {

    const queryParams = await params
    const id = queryParams.id
    const todo = await getTodo(Number(id))

    if (!todo) {
        return <div>Not found!</div>
    }

    return (
        <>
            <Header title="Todo Detail" subtitle="Here is detail of todo"/>
            <div className="todo-detail">
                <div className="todo-detail-card">
                    <h2>{todo.name}</h2>
                    <div className="todo-detail-status">
                        Status:{" "}
                        <span className={todo.completed ? "completed" : "active"}>
              {todo.completed ? "Completed" : "Active"}
            </span>
                    </div>
                    <div className="todo-detail-status">
                        Priority: <span className={"completed"}>{todo.priority}</span>
                    </div>

                    {todo.description && (
                        <div className="todo-detail-description">
                            <p>{todo.description}</p>
                        </div>
                    )}
                </div>

                <div>
                    <HomeButton/>
                    <ToggleButton todo={todo}/>
                </div>
            </div>
        </>
    );
};

export default TodoDetailPage;
