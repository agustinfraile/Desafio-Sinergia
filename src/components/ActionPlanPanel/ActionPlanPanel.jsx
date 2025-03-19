import { Card, CardContent, CardHeader, Typography, List, ListItem, ListItemIcon, ListItemText, Checkbox } from "@mui/material";
import { Users, Briefcase, School, Clock } from "lucide-react";
import { useState } from "react";
import styles from "./ActionPlanPanel.module.css";

const ActionPlanPanel = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Contactar 800 prospectos", icon: <Users />, completed: false },
        { id: 2, text: "Realizar 400 presentaciones", icon: <Briefcase />, completed: false },
        { id: 3, text: "Capacitación en técnicas de prospección", icon: <School />, completed: false },
        { id: 4, text: "40 prospectos diarios", icon: <Clock />, completed: false },
    ]);

    const toggleTaskCompletion = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <Card variant="outlined" className={styles.card}>
            <CardHeader title="Plan de Acción" />
            <CardContent>
                <List>
                    {tasks.map((task) => (
                        <ListItem key={task.id} className={styles.listItem}>
                            <ListItemIcon>{task.icon}</ListItemIcon>
                            <ListItemText primary={task.text} />
                            <Checkbox
                                edge="end"
                                checked={task.completed}
                                onChange={() => toggleTaskCompletion(task.id)}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default ActionPlanPanel;
