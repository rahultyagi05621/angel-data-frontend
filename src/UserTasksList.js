// src/UserTaskTable.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const UserTaskTable = () => {
    const tasks = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        email: 'xyz@gmail.com',
        status: 'Completed'
    }));

    return (
        <div className="container" id='container' >
            <h2>User Task</h2>
            <table className="table table-striped "id='table' >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email ID</th>
                        <th>Image</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.email}</td>
                            <td>
                                <img
                                    src="path/to/image.png"
                                    alt="task"
                                    style={{ width: '50px', height: '50px' }}
                                />
                            </td>
                            <td>
                                <span className="badge bg-success">{task.status}</span>
                            </td>
                            <td>Action</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav>
                <ul className="pagination">
                    <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                    <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                    <li className="page-item"><Link className="page-link" to="#">5</Link></li>
                    <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                </ul>
            </nav>
        </div>
    );}
export default UserTaskTable;
