import { useContext } from "react";
import { IconButton, List } from "react-native-paper";
import { TaskContext } from "../contexts/TaskContext";
import { deleteTask } from "../services/TaskService";

function TaskItem() {
    const { deleteTask, updateTask } = useContext(TaskContext);

    return (
        <List.Item
            title={task.descricao}
            description={task.concluida ? 'Concluída' : 'Pendente'}
            left={() => {
                <IconButton
                    icon={task.concluida ? 'check-circle' : 'circle'}
                    onPress={async () => await updateTask({ ...task, concluida: !task.concluida })}
                />
            }}
            right={() => {
                <IconButton
                    icon="delete"
                    onPress={async () => await deleteTask(task.id)}
                />
            }}
        />
    );

}