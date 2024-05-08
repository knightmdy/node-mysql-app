const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MySQL 连接配置
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'school'
});

// 连接数据库
connection.connect(error => {
  if (error) throw error;
  console.log('数据库连接成功。');
});
//进入主界面
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
//进入学生界面
app.get('/stu.html', function(req, res) {
  res.sendFile(__dirname + '/views/stu.html');
});
//进入教师界面
app.get('/tea.html', function(req, res) {
  res.sendFile(__dirname + '/views/tea.html');
});
//进入管理员界面
app.get('/admin.html', function(req, res) {
  res.sendFile(__dirname + '/views/admin.html');
});

// 获取学生列表
app.get('/students', (req, res) => {
  connection.query('SELECT * FROM students', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// 添加学生
app.post('/students', (req, res) => {
  const { name, sex ,age, class: classNum, email } = req.body;
  connection.query('INSERT INTO students (name, sex, age, class, email) VALUES (?, ?, ?, ?, ?)', 
  [name, sex, age, classNum, email], (error, results) => {
    if (error) throw error;
    res.send('学生添加成功。');
  });
});

// 删除学生
app.delete('/students/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM students WHERE id = ?', [id], (error, results) => {
    if (error) throw error;
    res.send('学生删除成功。');
  });
});

// 查找学生
app.get('/students/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM students WHERE id = ?', [id], (error, results) => {
        if (error) throw error;
        // 假设每个ID只对应一个学生，我们返回第一个结果
        res.json(results[0]);
    });
});

// 修改学生数据
app.put('/students/:id', (req, res) => {
  const { id } = req.params;
  const { name, sex, age, class: classNum, email } = req.body;
  connection.query('UPDATE students SET name = ?, sex = ?, age = ?, class = ?, email = ? WHERE id = ?', 
  [name, sex, age, classNum, email, id], (error, results) => {
    if (error) throw error;
    res.send('学生数据修改成功。');
  });
});

// 获取教师列表
app.get('/teachers', (req, res) => {
  connection.query('SELECT * FROM teachers', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// 添加教师
app.post('/teachers', (req, res) => {
  const { name, sex, subject, phone, email } = req.body;
  connection.query('INSERT INTO teachers (name, sex, subject, phone, email) VALUES (?, ?, ?, ?, ?)', 
  [name, sex, subject, phone, email], (error, results) => {
    if (error) throw error;
    res.send('教师添加成功。');
  });
});

// 删除教师
app.delete('/teachers/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM teachers WHERE id = ?', [id], (error, results) => {
    if (error) throw error;
    res.send('教师删除成功。');
  });
});

// 查找教师
app.get('/teachers/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM teachers WHERE id = ?', [id], (error, results) => {
        if (error) throw error;
        // 假设每个ID只对应一个教师，我们返回第一个结果
        res.json(results[0]);
    });
});

// 修改教师数据
app.put('/teachers/:id', (req, res) => {
  const { id } = req.params;
  // 将age改为subject（科目），class改为phone（电话）
  const { name, sex, subject, phone, email } = req.body;
  connection.query('UPDATE teachers SET name = ?, sex = ?, subject = ?, phone = ?, email = ? WHERE id = ?', 
  [name, sex, subject, phone, email, id], (error, results) => {
    if (error) throw error;
    res.send('教师数据修改成功。');
  });
});

// 设置端口
const PORT = process.env.PORT || 3000;

// 监听端口
app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}。`);
});
