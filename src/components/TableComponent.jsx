import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './json/student_mark_table.json';

function TableComponent() {
    const [tableData, setTableData] = useState([]); // State to store table data

    useEffect(() => {
        fetch('/api/database/pull')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setTableData(data); // Update tableData state with fetched data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to execute effect only once

    return (
        <div className="container">
            <div className='table-border'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th scope="col">Tên học phần</th>
                            <th scope="col">Số TC</th>
                            <th scope="col">Đánh giá</th>
                            <th scope="col">Chuyên cần</th>
                            <th scope="col">Kiểm tra GK</th>
                            <th scope="col">Thi Kết thúc</th>
                            <th scope="col">Thảo luận</th>
                            <th scope="col">Tổng kết</th>
                            <th scope="col">Điểm chữ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item["Tên học phần"]}</td>
                                <td>{item["Số TC"]}</td>
                                <td>{item["Đánh giá"]}</td>
                                <td>{item["Chuyên cần"]}</td>
                                <td>{item["Kiểm tra GK"]}</td>
                                <td>{item["Thi Kết thúc"]}</td>
                                <td>{item["Thảo luận"]}</td>
                                <td>{item["Tổng kết HP"]}</td>
                                <td>{item["Điểm chữ"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableComponent;
